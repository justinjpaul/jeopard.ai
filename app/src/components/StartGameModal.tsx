import { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  Modal,
  ModalDialog,
  Typography,
} from "@mui/joy";
import Delete from "@mui/icons-material/Delete";
import { addAccessedField, fetchHelperWithFiles } from "../utils";
import { Category } from "../types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { gameboardAtom } from "../constants/recoil_state";
// import { fetchHelper } from "../utils";

interface StartGameModalProps {
  open: boolean;
  onClose: () => void;
}

const StartGameModal: React.FC<StartGameModalProps> = ({ open, onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [ready, setReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [_, setGameboard] = useRecoilState(gameboardAtom);

  useEffect(() => {
    if (ready) {
      // need to
      onClose();
    }
  }, [ready]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      setSelectedFiles((prev) => [...prev, ...files]);
    }
  };

  const gameGenerationHandler = (hadError: boolean, jsonData: Category[]) => {
    setIsLoading(false);
    console.log(hadError, jsonData);
    if (!hadError) {
      console.log(addAccessedField(jsonData));
      setGameboard(addAccessedField(jsonData));
      setReady(true);
    } else {
    }
  };

  const handleUpload = () => {
    console.log("Uploading files:", selectedFiles);
    setIsLoading(true);
    fetchHelperWithFiles("/api/game", selectedFiles, gameGenerationHandler);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClearFile = (fileIndex: number) => {
    setSelectedFiles((prev) => prev.filter((_, index) => index !== fileIndex));
  };

  // const handleClearAllFiles = () => {
  //   setSelectedFiles([]);
  // };

  return (
    <Modal
      open={open}
      // onClose={onClose}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <ModalDialog layout="center">
        <Typography level="h4" component="h2">
          Upload Files
        </Typography>

        {!isLoading && (
          <div className="file-upload">
            <label htmlFor="file-upload" className="custom-file-upload">
              <Typography
                component="span"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                Drag and drop files here or click to select
              </Typography>
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              style={{ display: "none" }}
              id="file-upload"
            />
          </div>
        )}
        {selectedFiles.length > 0 && (
          <List>
            {selectedFiles.map((file, index) => (
              <ListItem
                key={index}
                endAction={
                  !isLoading && (
                    <IconButton
                      aria-label="Delete"
                      size="sm"
                      color="danger"
                      onClick={() => handleClearFile(index)}
                    >
                      <Delete />
                    </IconButton>
                  )
                }
              >
                {file.name}
              </ListItem>
            ))}
          </List>
        )}
        {!isLoading ? (
          <Button
            color="primary"
            onClick={handleUpload}
            disabled={selectedFiles.length === 0 || isLoading}
            style={{ marginTop: "16px" }}
          >
            Upload
          </Button>
        ) : (
          <CircularProgress />
        )}
      </ModalDialog>
    </Modal>
  );
};

export default StartGameModal;

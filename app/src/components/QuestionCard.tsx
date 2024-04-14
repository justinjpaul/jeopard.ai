import React from "react";
import { Card, CardContent, Typography } from "@mui/joy";

interface QuestionCardProps {
  value: number;
  accessed: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<QuestionCardProps> = ({
  value,
  accessed,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        "&:hover": {
          cursor: accessed ? "default" : "pointer",
        },
      }}
      variant={accessed ? "solid" : "soft"}
    >
      <CardContent>
        <Typography level="h4" textAlign="center">
          ${value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

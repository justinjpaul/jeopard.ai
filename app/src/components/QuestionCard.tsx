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
      variant={accessed ? "plain" : "soft"}
    >
      <CardContent>
        <Typography level="h4" textAlign="center" style={{ color: accessed ? 'transparent' : 'black' }}>
          ${value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

import React from "react";
import { Card, CardContent, Typography } from "@mui/joy";

interface CategoryCardProps {
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card
      variant="soft"
      sx={{
        height: "50%",
        justifyContent: "center",
        // borderColor: "#02e8d5",
      }}
    >
      <CardContent>
        <Typography
          level="h3"
          textAlign="center"
          sx={{
            backgroundImage: "linear-gradient(90deg, #02e8d5, #3802e8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

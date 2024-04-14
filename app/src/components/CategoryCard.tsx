import React from "react";
import { Card, CardContent, Typography } from "@mui/joy";

interface CategoryCardProps {
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card sx={{ height: "50%", justifyContent: "center" }}>
      <CardContent>
        <Typography level="h3" textAlign="center">
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

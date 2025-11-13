"use client";

import { Button } from "../button";
import { Carousel, CarouselContent, CarouselItem } from "../carousel";
import { cn } from "@/lib/utils";
import { useApp } from "@/contexts/AppContext";

const categories = [
  "Limpeza",
  "Cuidados",
  "Carpinteiro",
  "Pintor",
  "Encanador",
  "Mecânico",
  "Fotógrafo",
];

interface CategoriesCarouselProps {
  onCategoryChange?: (category: string | null) => void;
}

export default function CategoriesCarousel({
  onCategoryChange,
}: CategoriesCarouselProps) {
  const { selectedCategory, setSelectedCategory } = useApp();

  const handleCategoryClick = (category: string) => {
    const newSelected = selectedCategory === category ? null : category;
    setSelectedCategory(newSelected);
    onCategoryChange?.(newSelected);
  };

  return (
    <Carousel>
      <CarouselContent className="flex">
        {categories.map((category) => (
          <CarouselItem key={category} className="basis-auto">
            <Button
              onClick={() => handleCategoryClick(category)}
              className={cn(
                "bg-white text-black hover:bg-white cursor-pointer transition-all",
                selectedCategory === category &&
                  "bg-lightblue text-white hover:bg-lightblue"
              )}
            >
              {category}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

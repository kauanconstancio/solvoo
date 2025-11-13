import { Button } from "../button";
import { Carousel, CarouselContent, CarouselItem } from "../carousel";

export default function CategoriesCarousel() {
  return (
    <Carousel>
      <CarouselContent className="flex">
        <CarouselItem className="basis-auto">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            Limpeza
          </Button>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            Cuidados
          </Button>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            Carpinteiro
          </Button>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            Pintor
          </Button>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            Encanador
          </Button>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            Mecânico
          </Button>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <Button className="bg-white text-black hover:bg-white cursor-pointer">
            Fotógrafo
          </Button>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

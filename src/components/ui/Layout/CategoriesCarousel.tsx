import { Button } from "../button";
import { Carousel, CarouselContent, CarouselItem } from "../carousel";

export default function CategoriesCarousel () {
    return (
        <Carousel>
        <CarouselContent className="flex">
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:scale-110">
              Limpeza
            </Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:scale-110">
              Cuidados
            </Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:scale-110">
              Carpinteiro
            </Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:scale-110">
              Pintor
            </Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:scale-110">
              Encanador
            </Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:scale-110">
              Mecânico
            </Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:scale-110">
              Fotógrafo
            </Button>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    )
}
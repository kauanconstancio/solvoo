import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Dot,
  HeartIcon,
  House,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  VerifiedIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="flex flex-col m-5 max-h-dvh gap-3">
      <div className="flex gap-3">
        <InputGroup className="bg-white outline-none">
          <InputGroupInput placeholder="Buscar serviços..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-white hover:bg-white">
              <SlidersHorizontal className="text-black" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <h1>Filtro de pesquisa!</h1>
            <DialogClose asChild className="">
              <Button>Fechar</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-white hover:bg-white">
              <BellRing className="text-black" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-darkblue border-none shadow-lightblue shadow-2xl">
            <div className="mt-10 mx-5">
              <Card className="relative">
                <Dot className="text-red-500 size-25 absolute -right-12 -top-12" />
                <CardContent className="flex flex-col gap-3">
                  <CardTitle>
                    <p className="flex items-center gap-2">
                      23/06/2025 <BadgeCheck className="text-lightblue" />
                    </p>
                  </CardTitle>
                  <CardDescription>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Earum enim beatae ipsam repellendus necessitatibus quas
                      repellat, quae blanditiis odio soluta vel. Omnis maxime
                      commodi quas quidem voluptatibus architecto iusto rem.
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-transparent hover:bg-transparent justify-start">
            <MapPin /> Procurando em Serra - ES <ArrowRight />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <h1>Filtro de cidade</h1>
          <DialogClose asChild>
            <Button>Fechar</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <Separator />

      <Carousel>
        <CarouselContent className="flex">
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black">Limpeza</Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black">Cuidados</Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black">Carpinteiro</Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black">Pintor</Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black">Encanador</Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black">Mecânico</Button>
          </CarouselItem>
          <CarouselItem className="basis-auto">
            <Button className="bg-white text-black">Fotógrafo</Button>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p className="text-white font-medium">Selecione um de nossos parceiros</p>

      {/* FIX TAMANHO DO SCROLLAREA */}

      <ScrollArea className="h-[450px]">
        <div className="flex flex-col gap-3">
          <Card>
            <CardContent className="flex flex-col gap-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  John Doe
                  <VerifiedIcon className="text-lightblue" />
                </div>
                <p className="flex items-center gap-1">
                  5.0 <Star className="text-yellow-400" />
                </p>
              </CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                officiis, quod harum veritatis molestiae doloribus explicabo
                laudantium ducimus corporis ullam aspernatur nobis. Voluptatum
                ducimus quidem quo, praesentium vero id? Fugiat.
              </CardDescription>
              <CardFooter className="flex items-center justify-center px-5 gap-4">
                <Button className="bg-lightblue w-full">
                  Entrar em contato
                </Button>
                <ToggleGroup type="single">
                  <ToggleGroupItem
                    value="heart"
                    aria-label="Toggle heart"
                    className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0"
                  >
                    <HeartIcon />
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardFooter>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  John Doe
                  <VerifiedIcon className="text-lightblue" />
                </div>
                <p className="flex items-center gap-1">
                  5.0 <Star className="text-yellow-400" />
                </p>
              </CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                officiis, quod harum veritatis molestiae doloribus explicabo
                laudantium ducimus corporis ullam aspernatur nobis. Voluptatum
                ducimus quidem quo, praesentium vero id? Fugiat.
              </CardDescription>
              <CardFooter className="flex items-center justify-center px-5 gap-4">
                <Button className="bg-lightblue w-full">
                  Entrar em contato
                </Button>
                <ToggleGroup type="single">
                  <ToggleGroupItem
                    value="heart"
                    aria-label="Toggle heart"
                    className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0"
                  >
                    <HeartIcon />
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardFooter>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  John Doe
                  <VerifiedIcon className="text-lightblue" />
                </div>
                <p className="flex items-center gap-1">
                  5.0 <Star className="text-yellow-400" />
                </p>
              </CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                officiis, quod harum veritatis molestiae doloribus explicabo
                laudantium ducimus corporis ullam aspernatur nobis. Voluptatum
                ducimus quidem quo, praesentium vero id? Fugiat.
              </CardDescription>
              <CardFooter className="flex items-center justify-center px-5 gap-4">
                <Button className="bg-lightblue w-full">
                  Entrar em contato
                </Button>
                <ToggleGroup type="single">
                  <ToggleGroupItem
                    value="heart"
                    aria-label="Toggle heart"
                    className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0"
                  >
                    <HeartIcon />
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
      <footer className="flex items-center justify-between">
        <House />
        <House />
        <House />
        <House />
      </footer>
    </div>
  );
}

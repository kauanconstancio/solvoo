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
  CircleFadingPlus,
  Dot,
  HeartIcon,
  House,
  Logs,
  MapPin,
  Search,
  Send,
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
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col pt-3 mx-5 gap-3 relative h-dvh">
      <div className="flex gap-3 w-full">
        <Image
          src="/assets/solvoo-logo.png"
          alt="Logo"
          width={100}
          height={30}
          priority={true}
        />
        <InputGroup className="bg-white outline-none">
          <InputGroupInput placeholder="Buscar serviços..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-white hover:bg-white cursor-pointer">
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
            <Button className="bg-white hover:bg-white cursor-pointer">
              <BellRing className="text-black" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-darkblue border-none shadow-lightblue shadow-2xl w-[90%]">
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
          <Button className="bg-transparent hover:bg-transparent justify-start cursor-pointer">
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
      <p className="text-white font-medium">Selecione um de nossos parceiros</p>

      <div className="flex flex-col gap-3 pb-25">
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
              laudantium ducimus
            </CardDescription>
            <CardFooter className="flex items-center justify-center px-5 gap-4">
              <Button className="bg-lightblue w-full cursor-pointer hover:bg-lightblue">
                Entrar em contato
              </Button>
              <ToggleGroup type="single">
                <ToggleGroupItem
                  value="heart"
                  aria-label="Toggle heart"
                  className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0 cursor-pointer focus:bg-transparent"
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
              laudantium ducimus
            </CardDescription>
            <CardFooter className="flex items-center justify-center px-5 gap-4">
              <Button className="bg-lightblue w-full cursor-pointer hover:bg-lightblue">
                Entrar em contato
              </Button>
              <ToggleGroup type="single">
                <ToggleGroupItem
                  value="heart"
                  aria-label="Toggle heart"
                  className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0 cursor-pointer focus:bg-transparent"
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
              laudantium ducimus
            </CardDescription>
            <CardFooter className="flex items-center justify-center px-5 gap-4">
              <Button className="bg-lightblue w-full cursor-pointer hover:bg-lightblue">
                Entrar em contato
              </Button>
              <ToggleGroup type="single">
                <ToggleGroupItem
                  value="heart"
                  aria-label="Toggle heart"
                  className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0 cursor-pointer focus:bg-transparent"
                >
                  <HeartIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </CardFooter>
          </CardContent>
        </Card>
      </div>

      <footer className=" fixed flex items-center justify-between w-full bottom-0 bg-darkblue right-0 px-4 pb-2 border-t-1 ">
        <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent">
          <div className="bg-lightblue p-2 rounded-lg">
            <House />
          </div>
          Início
        </Button>
        <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent">
          <div className="p-2 rounded-lg">
            <CircleFadingPlus />
          </div>
          Anunciar
        </Button>
        <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent">
          <div className="p-2 rounded-lg">
            <Send />
          </div>
          Mensagem
        </Button>
        <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent">
          <div className="p-2 rounded-lg">
            <Logs />
          </div>
          Menu
        </Button>
      </footer>
    </div>
  );
}

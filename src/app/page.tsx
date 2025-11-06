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
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col m-5 h-full gap-3">
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
    </div>
  );
}

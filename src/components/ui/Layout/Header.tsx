import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, BellRing, Dot, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex gap-3 w-full">
      <Link href="/" className="flex items-center justify-center" prefetch>
        <Image
          src="/assets/solvoo-logo.png"
          alt="Logo"
          width={100}
          height={60}
          priority={true}
          className="cursor-pointer"
        />
      </Link>
      <InputGroup className="bg-white outline-none">
        <InputGroupInput placeholder="Buscar serviços..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

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
  );
}

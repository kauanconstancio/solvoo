import { CircleFadingPlus, House, Logs, Send } from "lucide-react";
import { Button } from "../button";

export default function FooterMenu() {
  return (
    <footer className=" fixed flex items-center justify-between w-full bottom-0 bg-darkblue right-0 px-4 pb-2 border-t-1 ">
      <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent cursor-pointer">
        <div className="bg-lightblue p-2 rounded-lg">
          <House />
        </div>
        Início
      </Button>
      <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent cursor-pointer">
        <div className="p-2 rounded-lg">
          <CircleFadingPlus />
        </div>
        Anunciar
      </Button>
      <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent cursor-pointer">
        <div className="p-2 rounded-lg">
          <Send />
        </div>
        Mensagem
      </Button>
      <Button className="flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent cursor-pointer">
        <div className="p-2 rounded-lg">
          <Logs />
        </div>
        Menu
      </Button>
    </footer>
  );
}

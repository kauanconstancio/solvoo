import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FooterMenu from "@/components/ui/Layout/FooterMenu";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Verified } from "lucide-react";

export default function Menu() {
  return (
    <div className="flex flex-col gap-3 pt-3 mx-5 pb-25">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold flex items-center gap-1">
            John Doe <Verified className="text-lightblue" />
          </h2>
          <p className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent text-sm">
            Ver perfil
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Segurança e privacidade <ChevronRight />
        </p>
        <Separator />
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Meus parceiros favoritos <ChevronRight />
        </p>
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Minha conta de anúncio <ChevronRight />
        </p>
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Meus anúncios <ChevronRight />
        </p>
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Serviços realizados <ChevronRight />
        </p>
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Serviços contratados <ChevronRight />
        </p>
        <Separator />
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Carteira <ChevronRight />
        </p>
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Gerenciar pagamentos <ChevronRight />
        </p>
        <Separator />
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Mudar Linguagem <ChevronRight />
        </p>
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Ajuda <ChevronRight />
        </p>
        {/* somente para android */}
        {/* <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Avalie na Google Play
          <ChevronRight />
        </p> */}
        <p className="flex justify-between items-center text-white cursor-pointer py-2">
          Sair <ChevronRight />
        </p>
      </div>
      <FooterMenu />
    </div>
  );
}

import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import Link from "next/link";
import CategoriesCards from "./components/CategoriesCards";
import FooterMenu from "@/components/ui/Layout/FooterMenu";

export default function Announce() {
  return (
    <div className="min-h-screen bg-darkblue pb-24">
      <div className="flex flex-col gap-3 pt-3 mx-5">
        <Link href="/" prefetch>
          <button className="flex gap-2 text-white cursor-pointer">
            <X />
            Criar Anúncio
          </button>
        </Link>
        <Separator />
        <p className="text-white font-medium text-xl">
          Divulgue agora o seu serviço e conquiste clientes com o nosso Sistema
          de{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Gerenciamento de Anúncios
          </span>
          .
        </p>
        <CategoriesCards />
      </div>
      <FooterMenu />
    </div>
  );
}

import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import Link from "next/link";
import AnnounceForm from "./components/AnnounceForm";

export default async function NewAnnounce({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params?.category || "Categoria";

  return (
    <div className="min-h-screen bg-darkblue pb-24">
      <div className="flex flex-col gap-3 pt-3 mx-5">
        <Link href="/announce" prefetch>
          <button className="flex gap-2 text-white cursor-pointer">
            <X />
            Criar Anúncio
          </button>
        </Link>
        <Separator />
        <p className="text-white font-medium text-xl">
          Criando anúncio para:{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            {category}
          </span>
        </p>
        <AnnounceForm category={category} />
      </div>
    </div>
  );
}

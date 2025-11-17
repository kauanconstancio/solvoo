import FooterMenu from "@/components/ui/Layout/FooterMenu";
import { Separator } from "@/components/ui/separator";
import ContactCard, { Contact } from "./components/ContactCard";
import { MessageCircleMore } from "lucide-react";

const contacts: Contact[] = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Lorem ipsum dolor sit amet consectetur...",
    time: "20:24",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
  {
    id: 2,
    name: "Jane Foster",
    lastMessage: "Obrigada pelo retorno! Podemos conversar amanhã?",
    time: "19:10",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    verified: true,
  },
  {
    id: 3,
    name: "Lucas Pereira",
    lastMessage: "Enviei os documentos solicitados por e-mail.",
    time: "18:02",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    verified: false,
  },
  {
    id: 4,
    name: "Marina Costa",
    lastMessage: "Olá! Ainda está disponível?",
    time: "17:45",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    verified: false,
  },
  {
    id: 5,
    name: "Diego Nunes",
    lastMessage: "Perfeito! Fechamos assim então.",
    time: "16:11",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    verified: false,
  },
];

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0f1d38] border border-dashed border-[#1b2f58] py-16 px-4 text-center shadow-inner">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#132447] text-lightblue mb-6">
      <MessageCircleMore className="h-8 w-8" />
    </div>
    <p className="text-white text-lg font-semibold mb-2">
      Você não tem chats ativos
    </p>
    <p className="text-gray-300 text-sm max-w-xs">
      Assim que uma conversa for iniciada ela aparecerá aqui.
    </p>
  </div>
);

export default function Mensage() {
  const hasChats = contacts.length > 0;

  return (
    <div className="min-h-screen bg-darkblue pb-24">
      <div className="flex flex-col gap-4 pt-6 px-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-semibold text-xl">Mensagens</h1>
          <Separator />
        </div>
        {hasChats ? (
          <div className="flex flex-col gap-3">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
      <FooterMenu />
    </div>
  );
}

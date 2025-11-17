import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

export type Contact = {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  verified?: boolean;
};

type ContactCardProps = {
  contact: Contact;
};

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <Card className="flex flex-row gap-3 px-3 cursor-pointer overflow-hidden">
      <Avatar className="h-12 w-12 shrink-0">
        <AvatarImage src={contact.avatar} alt={contact.name} />
        <AvatarFallback>
          {contact.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0 p-0">
        <div className="flex items-center justify-between gap-3 min-w-0">
          <div className="flex items-center gap-1 text-white font-semibold text-sm min-w-0 flex-1">
            <span className="truncate text-black">{contact.name}</span>
            {contact.verified && (
              <BadgeCheck className="text-lightblue h-4 w-4 shrink-0" />
            )}
          </div>
          <span className="text-black text-xs shrink-0">{contact.time}</span>
        </div>
        <p className="text-black text-sm truncate">{contact.lastMessage}</p>
      </div>
    </Card>
  );
}

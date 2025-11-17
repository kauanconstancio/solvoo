"use client";

import { CircleFadingPlus, House, Logs, Send } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterMenu() {
  const pathname = usePathname();

  const getButtonClasses = (href: string) =>
    `flex flex-col gap-1 h-auto bg-transparent hover:bg-transparent cursor-pointer ${
      pathname === href ? "text-white" : ""
    }`;

  const getIconWrapperClasses = (href: string) =>
    `p-2 rounded-lg ${
      pathname === href ? "bg-lightblue text-white" : "bg-transparent"
    }`;

  return (
    <footer className=" fixed flex items-center justify-between w-full bottom-0 bg-darkblue right-0 px-4 pb-2 border-t-1 ">
      <Link prefetch href="/">
        <Button className={getButtonClasses("/")}>
          <div className={getIconWrapperClasses("/")}>
            <House />
          </div>
          Início
        </Button>
      </Link>
      <Link prefetch href="/announce">
        <Button className={getButtonClasses("/announce")}>
          <div className={getIconWrapperClasses("/announce")}>
            <CircleFadingPlus />
          </div>
          Anunciar
        </Button>
      </Link>
      <Link prefetch href="/message">
        <Button className={getButtonClasses("/message")}>
          <div className={getIconWrapperClasses("/message")}>
            <Send />
          </div>
          Mensagem
        </Button>
      </Link>
      <Link prefetch href="/menu">
        <Button className={getButtonClasses("/menu")}>
          <div className={getIconWrapperClasses("/menu")}>
            <Logs />
          </div>
          Menu
        </Button>
      </Link>
    </footer>
  );
}

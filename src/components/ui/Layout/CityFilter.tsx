"use client";

import * as React from "react";

import { Popover } from "@radix-ui/react-popover";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";
import { PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command";
import { cn } from "@/lib/utils";
import { estadosComTodos } from "@/lib/estados";

const estados = estadosComTodos;

interface CityFilterProps {
  onEstadoChange?: (estado: string | null) => void;
}

export default function CityFilter({ onEstadoChange }: CityFilterProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setOpen(false);
    onEstadoChange?.(newValue || null);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between bg-transparent border-none text-white hover:bg-transparent hover:text-white cursor-pointer p-0"
        >
          <div className="flex items-center gap-3">
            <MapPin />
            {value
              ? estados.find((estado) => estado.value === value)?.label
              : "Selecione o seu Estado"}
          </div>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Digite o Estado..." className="h-9" />
          <CommandList>
            <CommandEmpty>Estado não encontrado</CommandEmpty>
            <CommandGroup>
              {estados.map((estado) => (
                <CommandItem
                  key={estado.value}
                  value={estado.value}
                  onSelect={handleSelect}
                >
                  {estado.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === estado.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { estados } from "@/lib/estados";

interface AnnounceFormProps {
  category: string;
}

export default function AnnounceForm({ category }: AnnounceFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openEstado, setOpenEstado] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    estado: "",
    cidade: "",
    price: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleEstadoSelect = (value: string) => {
    setFormData({ ...formData, estado: value });
    setOpenEstado(false);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Título é obrigatório";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    }

    if (!formData.estado) {
      newErrors.estado = "Estado é obrigatório";
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = "Cidade é obrigatória";
    }

    if (!formData.price.trim()) {
      newErrors.price = "Preço é obrigatório";
    } else if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0) {
      newErrors.price = "Preço deve ser um número válido maior que zero";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/announce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          category: category,
          estado: formData.estado,
          cidade: formData.cidade,
          price: parseFloat(formData.price),
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        const error = await response.json();
        alert(error.error || "Erro ao criar anúncio");
      }
    } catch (error) {
      console.error("Erro ao criar anúncio:", error);
      alert("Erro ao criar anúncio. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="title" className="text-white">
            Título do Anúncio
          </Label>
          <span className="text-gray-400 text-xs">
            {formData.title.length}/60
          </span>
        </div>
        <Input
          id="title"
          type="text"
          placeholder="Ex: Serviço de Limpeza Residencial"
          value={formData.title}
          onChange={(e) => {
            const value = e.target.value.slice(0, 60);
            setFormData({ ...formData, title: value });
          }}
          maxLength={60}
          className="bg-white text-darkblue"
          aria-invalid={!!errors.title}
        />
        {errors.title && (
          <span className="text-red-400 text-sm">{errors.title}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="description" className="text-white">
            Descrição
          </Label>
          <span className="text-gray-400 text-xs">
            {formData.description.length}/200
          </span>
        </div>
        <Textarea
          id="description"
          placeholder="Descreva seu serviço em detalhes..."
          value={formData.description}
          onChange={(e) => {
            const value = e.target.value.slice(0, 200);
            setFormData({ ...formData, description: value });
          }}
          maxLength={200}
          className="bg-white text-darkblue min-h-32"
          aria-invalid={!!errors.description}
        />
        {errors.description && (
          <span className="text-red-400 text-sm">{errors.description}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-white">Estado</Label>
        <Popover open={openEstado} onOpenChange={setOpenEstado}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openEstado}
              className={cn(
                "justify-between bg-white text-darkblue hover:bg-gray-100",
                !formData.estado && "text-gray-500",
                errors.estado && "border-red-500"
              )}
            >
              {formData.estado
                ? estados.find((estado) => estado.value === formData.estado)
                    ?.label
                : "Selecione o Estado"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                      onSelect={handleEstadoSelect}
                    >
                      {estado.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          formData.estado === estado.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {errors.estado && (
          <span className="text-red-400 text-sm">{errors.estado}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cidade" className="text-white">
          Cidade
        </Label>
        <Input
          id="cidade"
          type="text"
          placeholder="Ex: Rio de Janeiro"
          value={formData.cidade}
          onChange={(e) => {
            const value = e.target.value.slice(0, 50);
            setFormData({ ...formData, cidade: value });
          }}
          maxLength={50}
          className="bg-white text-darkblue"
          aria-invalid={!!errors.cidade}
        />
        {errors.cidade && (
          <span className="text-red-400 text-sm">{errors.cidade}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="price" className="text-white">
          Preço (R$)
        </Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          min="0"
          placeholder="0.00"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="bg-white text-darkblue"
          aria-invalid={!!errors.price}
        />
        {errors.price && (
          <span className="text-red-400 text-sm">{errors.price}</span>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? "Criando..." : "Criar Anúncio"}
      </Button>
    </form>
  );
}


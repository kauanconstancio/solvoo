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
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleEstadoSelect = (value: string) => {
    setFormData({ ...formData, estado: value });
    setOpenEstado(false);
    if (errors.estado) {
      setErrors((prev) => ({ ...prev, estado: "" }));
    }
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "title":
        if (!value.trim()) {
          return "Título é obrigatório";
        }
        if (value.trim().length < 5) {
          return "Título deve ter no mínimo 5 caracteres";
        }
        if (value.trim().length > 60) {
          return "Título deve ter no máximo 60 caracteres";
        }
        return "";
      case "description":
        if (!value.trim()) {
          return "Descrição é obrigatória";
        }
        if (value.trim().length < 20) {
          return "Descrição deve ter no mínimo 20 caracteres";
        }
        if (value.trim().length > 200) {
          return "Descrição deve ter no máximo 200 caracteres";
        }
        return "";
      case "cidade":
        if (!value.trim()) {
          return "Cidade é obrigatória";
        }
        if (value.trim().length < 2) {
          return "Cidade deve ter no mínimo 2 caracteres";
        }
        if (/^\d+$/.test(value.trim())) {
          return "Cidade não pode conter apenas números";
        }
        if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value.trim())) {
          return "Cidade contém caracteres inválidos";
        }
        return "";
      case "price":
        if (!value.trim()) {
          return "Preço é obrigatório";
        }
        const priceNum = parseFloat(value);
        if (isNaN(priceNum)) {
          return "Preço deve ser um número válido";
        }
        if (priceNum <= 0) {
          return "Preço deve ser maior que zero";
        }
        if (priceNum > 1000000) {
          return "Preço não pode ser maior que R$ 1.000.000,00";
        }
        if (!/^\d+(\.\d{1,2})?$/.test(value.trim())) {
          return "Preço deve ter no máximo 2 casas decimais";
        }
        return "";
      case "estado":
        if (!value) {
          return "Estado é obrigatório";
        }
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const value = formData[field as keyof typeof formData];
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((field) => {
      const value = formData[field as keyof typeof formData];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<string, boolean>
      )
    );
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
            if (touched.title && errors.title) {
              const error = validateField("title", value);
              setErrors((prev) => ({ ...prev, title: error }));
            }
          }}
          onBlur={() => handleBlur("title")}
          maxLength={60}
          className={cn(
            "bg-white text-darkblue",
            errors.title && touched.title && "border-red-500 focus-visible:border-red-500"
          )}
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
            if (touched.description && errors.description) {
              const error = validateField("description", value);
              setErrors((prev) => ({ ...prev, description: error }));
            }
          }}
          onBlur={() => handleBlur("description")}
          maxLength={200}
          className={cn(
            "bg-white text-darkblue min-h-32",
            errors.description && touched.description && "border-red-500 focus-visible:border-red-500"
          )}
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
            if (touched.cidade && errors.cidade) {
              const error = validateField("cidade", value);
              setErrors((prev) => ({ ...prev, cidade: error }));
            }
          }}
          onBlur={() => handleBlur("cidade")}
          maxLength={50}
          className={cn(
            "bg-white text-darkblue",
            errors.cidade && touched.cidade && "border-red-500 focus-visible:border-red-500"
          )}
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
          max="1000000"
          placeholder="0.00"
          value={formData.price}
          onChange={(e) => {
            const value = e.target.value;
            setFormData({ ...formData, price: value });
            if (touched.price && errors.price) {
              const error = validateField("price", value);
              setErrors((prev) => ({ ...prev, price: error }));
            }
          }}
          onBlur={() => handleBlur("price")}
          className={cn(
            "bg-white text-darkblue",
            errors.price && touched.price && "border-red-500 focus-visible:border-red-500"
          )}
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


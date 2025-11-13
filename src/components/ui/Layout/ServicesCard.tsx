"use client";

import { useState, useMemo } from "react";
import { HeartIcon, Star, VerifiedIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../card";
import { Button } from "../button";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group";
import { Service } from "@/lib/types";

interface ServicersCardProps {
  services: Service[];
  selectedCategory?: string | null;
  selectedEstado?: string | null;
}

export default function ServicersCard({
  services,
  selectedCategory,
  selectedEstado,
}: ServicersCardProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        !selectedCategory || service.category === selectedCategory;
      const matchesEstado =
        !selectedEstado ||
        selectedEstado === "todos" ||
        service.estado === selectedEstado;
      return matchesCategory && matchesEstado;
    });
  }, [services, selectedCategory, selectedEstado]);

  const toggleFavorite = (serviceId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(serviceId)) {
        newFavorites.delete(serviceId);
      } else {
        newFavorites.add(serviceId);
      }
      return newFavorites;
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  if (filteredServices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-white text-lg">Nenhum serviço encontrado</p>
        <p className="text-gray-400 text-sm mt-2">
          Tente ajustar os filtros de categoria ou estado
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 pb-25">
      {filteredServices.map((service) => (
        <Card key={service.id}>
          <CardContent className="flex flex-col gap-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={service.providerAvatar}
                    alt={service.providerName}
                  />
                  <AvatarFallback>
                    {getInitials(service.providerName)}
                  </AvatarFallback>
                </Avatar>
                {service.providerName}
                {service.verified && (
                  <VerifiedIcon className="text-lightblue" />
                )}
              </div>
              <p className="flex items-center gap-1">
                {service.rating.toFixed(1)} <Star className="text-yellow-400" />
              </p>
            </CardTitle>
            <div>
              <h3 className="text-white font-semibold mb-1">{service.title}</h3>
              <CardDescription>{service.description}</CardDescription>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white font-medium">
                {formatPrice(service.price)}
              </span>
              <span className="text-gray-400">{service.city}</span>
            </div>
            <CardFooter className="flex items-center justify-center px-5 gap-4">
              <Button className="bg-lightblue w-full cursor-pointer hover:bg-lightblue">
                Entrar em contato
              </Button>
              <ToggleGroup
                type="single"
                value={favorites.has(service.id) ? "heart" : undefined}
                onValueChange={() => toggleFavorite(service.id)}
              >
                <ToggleGroupItem
                  value="heart"
                  aria-label="Toggle heart"
                  className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0 cursor-pointer focus:bg-transparent hover:bg-transparent"
                >
                  <HeartIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

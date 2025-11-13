"use client";

import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import Header from "../components/ui/Layout/Header";
import FooterMenu from "@/components/ui/Layout/FooterMenu";
import CityFilter from "@/components/ui/Layout/CityFilter";
import CategoriesCarousel from "@/components/ui/Layout/CategoriesCarousel";
import ServicersCard from "@/components/ui/Layout/ServicesCard";
import { useApp } from "@/contexts/AppContext";
import { mockServices } from "@/lib/data";

export default function Home() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedEstado,
    setSelectedEstado,
    services,
    setServices,
  } = useApp();

  useEffect(() => {
    if (services.length === 0) {
      setServices(mockServices);
    }
  }, [services.length, setServices]);

  return (
    <div className="flex flex-col pt-3 mx-5 gap-3 relative h-dvh">
      <Header />
      <Separator />
      <CityFilter onEstadoChange={setSelectedEstado} />
      <p className="text-white font-medium">Selecione um de nossos parceiros</p>
      <CategoriesCarousel onCategoryChange={setSelectedCategory} />
      <ServicersCard
        services={services}
        selectedCategory={selectedCategory}
        selectedEstado={selectedEstado}
      />
      <FooterMenu />
    </div>
  );
}

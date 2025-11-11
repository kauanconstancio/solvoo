import { Separator } from "@/components/ui/separator";
import Header from "../components/ui/Layout/Header";
import FooterMenu from "@/components/ui/Layout/FooterMenu";
import CityFilter from "@/components/ui/Layout/CityFilter";
import CategoriesCarousel from "@/components/ui/Layout/CategoriesCarousel";
import ServicersCard from "@/components/ui/Layout/ServicesCard";

export default function Home() {
  return (
    <div className="flex flex-col pt-3 mx-5 gap-3 relative h-dvh">
      <Header />
      <Separator />
      <CityFilter />
      <p className="text-white font-medium">Selecione um de nossos parceiros</p>
      <CategoriesCarousel />
      <ServicersCard />
      <FooterMenu />
    </div>
  );
}

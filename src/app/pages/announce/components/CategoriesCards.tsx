import Link from "next/link";
import {
  Sparkles,
  Heart,
  Hammer,
  Paintbrush,
  Camera,
  Droplet,
  Wrench,
} from "lucide-react";

const categories = [
  { name: "Limpeza", icon: Sparkles },
  { name: "Cuidados", icon: Heart },
  { name: "Construção", icon: Hammer },
  { name: "Pintura", icon: Paintbrush },
  { name: "Fotógrafo", icon: Camera },
  { name: "Encanador", icon: Droplet },
  { name: "Mecânico", icon: Wrench },
];

export default function CategoriesCards() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.name}
            href={`/announce/new?category=${encodeURIComponent(category.name)}`}
            className="
              px-4 py-3 rounded-lg text-sm font-medium transition-all
              bg-white text-lightblue border border-transparent
              hover:opacity-90
              flex items-center justify-center gap-2
            "
          >
            <Icon size={18} />
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}

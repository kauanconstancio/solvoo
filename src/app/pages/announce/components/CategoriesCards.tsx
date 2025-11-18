import Link from "next/link";

const categories = [
  "Limpeza",
  "Cuidados",
  "Construção",
  "Pintura",
  "Fotógrafo",
  "Encanador",
  "Mecânico",
];

export default function CategoriesCards() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/announce/new?category=${encodeURIComponent(category)}`}
          className="
            px-4 py-3 rounded-lg text-sm font-medium transition-all
            bg-white text-lightblue border border-transparent
            hover:opacity-90
            block text-center
          "
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

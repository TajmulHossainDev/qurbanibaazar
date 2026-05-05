import AnimalCard from "@/components/AnimalCard";
import Link from "next/link";

const AllAnimalPage = async ({ searchParams }) => {
  const { sort } = await searchParams;
  const res = await fetch("https://qurbanibaazar.vercel.app/animals.json");
  const animals = await res.json();
  if (sort === "price-asc") {
    animals.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    animals.sort((a, b) => b.price - a.price);
  }
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <h1 className="text-2xl font-bold mb-5"> All Animals </h1>
      <div className="flex gap-3 mb-6">
        <Link
          href="/animals"
          className={`border px-4 py-1.5 rounded text-sm font-semibold ${!sort ? "bg-emerald-900 text-white" : "hover:bg-gray-100"}`}
        >
          default
        </Link>

        <Link
          href="/animals?sort=price-asc"
          className={`border px-4 py-1.5 rounded text-sm font-semibold ${sort === "price-asc" ? "bg-emerald-900 text-white" : "hover:bg-gray-100"}`}
        >
          Price Low To High
        </Link>

        <Link
          href="/animals?sort=price-desc"
          className={`border px-4 py-1.5 rounded text-sm font-semibold ${sort === "price-desc" ? "bg-emerald-900 text-white" : "hover:bg-gray-100"}`}
        >
          Price High To Low
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
    </div>
  );
};

export default AllAnimalPage;

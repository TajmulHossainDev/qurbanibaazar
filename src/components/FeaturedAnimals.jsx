import AnimalCard from "./AnimalCard";
const FeaturedAnimals = async () => {
  const res = await fetch("https://qurbanibaazar.vercel.app/animals.json");
  const animals = await res.json();
  const featured = animals.filter((a) => a.featured).slice(0, 4);
  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-3xl font-bold mb-6 text-center"> Featured Animal </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featured.map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimals;

export const dynamic = "force-dynamic";


const TopBreeds = async () => {
    const res = await fetch('https://qurbanibaazar.vercel.app/animals.json')
  const animals = await res.json();
  const breedMap = {};

  animals.forEach((animal) => {
    if (breedMap[animal.breed]) {
      breedMap[animal.breed]++;
    } else {
      breedMap[animal.breed] = 1;
    }
  });

  const topBreeds = Object.entries(breedMap)
    .map(([breed, count]) => ({
      breed,
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Breed</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {topBreeds.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="font-semibold text-sm">{item.breed}</h2>
            <p className="text-gray-600 text-xs mt-1">{item.count} টি আছে</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBreeds;

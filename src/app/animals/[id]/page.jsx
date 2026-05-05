import Image from "next/image";
import BookingForm from "@/components/BookingForm";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('https://qurbanibaazar.vercel.app/animals.json');
  const animals = await res.json();
  const animal = animals.find((a) => a.id == id);
  
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="rounded-xl object-contain"
          ></Image>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2"> {animal.name} </h1>
          <p className="text-gray-500 mb-1"> Breed: {animal.breed} </p>
          <p className="text-gray-500 mb-1"> Age: {animal.age} </p>
          <p className="text-gray-500 mb-1"> Weight: {animal.weight} </p>
          <p className="text-gray-500 mb-1"> Location: {animal.location} </p>
          <p className="text-gray-500 mb-1">
            {" "}
            Description: {animal.description}{" "}
          </p>
          <p className="text-2xl font-bold text-green-700 mb-6">
            {" "}
            ${animal.price.toLocaleString()}{" "}
          </p>
          <h2 className="text-xl font-bold mb-4 text-center">Please Book</h2>
          <BookingForm></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;

import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const AnimalCard = ({ animal }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-lg transition duration-300">
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-lg">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        ></Image>
        <span className="absolute right-2 top-2 bg-white text-s font-semibold px-2 py-1 rounded-full">
          {animal.type}
        </span>
      </div>
      <h2 className=" font-semibold mt-3 text-base"> {animal.name} </h2>
      <div className="flex justify-between items-center my-1">
        <p className="text-green-700 font-bold"> ৳ {animal.price.toLocaleString()} </p>
        <p className="text-gray-500 text-sm flex items-center gap-1">
          {" "}
          <FaLocationDot /> {animal.location}{" "}
        </p>
      </div>
      <Link href={`/animals/${animal.id}`}>
        <button className="w-full border border-green-700 text-green-700 py-1.5 rounded mt-2 hover:bg-green-500 hover:text-white text-sm font-bold transition duration-300">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default AnimalCard;

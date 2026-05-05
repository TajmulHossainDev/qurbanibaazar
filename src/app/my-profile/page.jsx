"use client";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {
  const user = null;
  return (
    <div className="max-w-7xl mx-auto border rounded-lg mt-10 p-6 flex flex-col items-center gap-3 shadow">
      <Image
        src={user?.image}
        alt={user?.name}
        referrerPolicy="no-referrer"
        className="w-20 h-20 rounded-full object-cover"
      ></Image>
      <h2 className="text-xl font-bold"> {user?.name} </h2>
      <p className="text-gray-500 text-sm"> {user?.email} </p>
      <Link href="/my-profile/update">
        <button className="bg-emerald-900 text-white px-6 py-2 rounded hover:bg-emerald-700 text-sm mt-2">
          {" "}
          Update Information{" "}
        </button>
      </Link>
    </div>
  );
};

export default MyProfilePage;

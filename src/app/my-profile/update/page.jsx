"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const UpdateProfilePage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({
      name,
      image,
    });
    toast.success("profile update successfully");
    router.push("/my-profile");
  };
  return (
    <div className="max-w-96 mx-auto border rounded-lg mt-10 p-6 shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Update Information
      </h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full border rounded px-3 py-2 text-sm mt-1 outline-none focus:border-green-700"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Image</label>
          <input
            type="text"
            name="image"
            required
            placeholder="Image URL"
            className="w-full border rounded px-3 py-2 text-sm mt-1 outline-none focus:border-green-700"
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-900 text-white py-2 rounded hover:bg-emerald-700"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;

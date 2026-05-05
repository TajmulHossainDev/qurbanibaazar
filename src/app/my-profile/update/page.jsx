"use client";
const UpdateProfilePage = () => {
  return (
    <div className="max-w-96 mx-auto border rounded-lg mt-10 p-6 shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Update Information
      </h1>

      <form className="flex flex-col gap-4">
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
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="jhon@example.com"
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

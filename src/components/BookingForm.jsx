"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const BookingForm = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("For Booking Please Login first");
      router.push("/login");
      return;
    }
    toast.success("Your Booking in Confirmed.We Will contact with you soon...");
    e.target.reset();
  };
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        required
        type="text"
        placeholder="Enter Your Name"
        className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
      ></input>
      <input
        required
        type="email"
        placeholder="Enter Your Email"
        className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
      ></input>
      <input
        required
        type="tel"
        placeholder="Enter Your Mobile Number"
        className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
      ></input>
      <textarea
        placeholder="Enter Your Address"
        rows={3}
        className="w-full border rounded px-3 py-2 text-sm outline-none focus:border-green-700"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-emerald-900 text-white py-2 rounded hover:bg-emerald-700"
      >
        Confirm Your Booking
      </button>
    </form>
  );
};
export default BookingForm;

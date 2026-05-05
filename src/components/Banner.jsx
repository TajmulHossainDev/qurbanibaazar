import Link from "next/link";
import banner from "../../public/banner.png";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-[90vh] w-full bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${banner.src || banner})` }}
    >
      <div className="h-full w-full bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-2xl">
            আপনার পছন্দের কুরবানির পশু অনলাইনে বুক করুন
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl text-gray-200">
            সেরা মানের গরু ও ছাগল।সুস্থ ও হৃষ্টপুষ্ট পশু সরাসরি আপনার কাছে।
          </p>
          <div className="flex gap-4">
            <Link href="/animals">
              <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300">
                {" "}
                Visit All Animals{" "}
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300">
                {" "}
                Register{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

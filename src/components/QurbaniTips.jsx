import { SiVerizon } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTeethOpen } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
const tips = [
  {
    icon: <SiVerizon />,
    title: "সুস্থ পশু নির্বাচন করুন",
    description:
      "পশুর চোখ উজ্জ্বল, নাক পরিষ্কার এবং শরীর হৃষ্টপুষ্ট হওয়া জরুরি।",
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "বয়স যাচাই করুন",
    description: "গরুর বয়স কমপক্ষে ২ বছর এবং ছাগলের ১ বছর হতে হবে।",
  },
  {
    icon: <FaTeethOpen />,
    title: "দাঁত পরীক্ষা করুন",
    description: "সঠিক বয়সের পশু চেনার জন্য দাঁতের সংখ্যা গণনা করুন।",
  },
  {
    icon: <TfiAlarmClock />,
    title: "আগেভাগে বুক করুন",
    description: "ঈদের আগে দাম বাড়ে। এখনই বুক করলে সেরা দামে পাবেন।",
  },
];

const QurbaniTips = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-3xl text-center font-bold mb-8">কুরবানির টিপস</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
          >
            <p className="text-4xl mb-3 text-emerald-900 bg-emerald-200 w-14 h-14 flex justify-center items-center rounded-full">
              {tip.icon}
            </p>
            <h2 className="font-semibold mb-1 text-lg">{tip.title}</h2>
            <p className="text-gray-500 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QurbaniTips;

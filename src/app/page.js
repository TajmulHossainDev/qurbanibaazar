import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedAnimals></FeaturedAnimals>
      <TopBreeds></TopBreeds>
      <QurbaniTips></QurbaniTips>
    </>
  );
}

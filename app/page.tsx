import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Banner from "@/components/Banner";
import Magazines from "@/components/Magazines";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <main className="bg-[#FBFBFD]">
      <Header />

      <Hero />

      <Description />

      <Magazines />

      <Banner />

      <Articles />

      <Footer />
    </main>
  );
}

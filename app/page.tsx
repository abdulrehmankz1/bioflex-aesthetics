import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <OurProducts />
    </>
  );
}

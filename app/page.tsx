import Banner from "./components/Banner";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurBlog from "./components/OurBlog";
import OurProducts from "./components/OurProducts";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <OurProducts />
      <OurBlog />
      <Banner />
      <Footer />
    </>
  );
}

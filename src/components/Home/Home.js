import HeroSection from "../HeroSection/HeroSection";
import BrandLogos from "../BrandLogos/BrandLogos";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import ShopCollection from "../ShopCollection/ShopCollection";
import BestSeller from "../BestSeller/BestSeller";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <ProductCarousel />
      <ShopCollection />
      <BestSeller />
      <Banner />
    </>
  );
};

export default Home;

import HeroSection from "../HeroSection/HeroSection";
import BrandLogos from "../BrandLogos/BrandLogos";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import ShopCollection from "../ShopCollection/ShopCollection";
import BestSeller from "../BestSeller/BestSeller";
import Banner from "../Banner/Banner";
import Values from "../Values/Values";
import NewsFeed from "../NewsFeed/NewsFeed";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <ProductCarousel />
      <ShopCollection />
      <BestSeller admin={false} />
      <Banner />
      <Values />
      <NewsFeed />
      <NewsLetter />
    </>
  );
};

export default Home;

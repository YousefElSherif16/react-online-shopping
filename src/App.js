import Banner from "./components/Banner/Banner";
import BestSeller from "./components/BestSeller/BestSeller";
import BrandLogos from "./components/BrandLogos/BrandLogos";
import HeroSection from "./components/HeroSection/HeroSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotificationBar from "./components/NotificationBar/NotificationBar";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import ShopCollection from "./components/ShopCollection/ShopCollection";

function App() {
  return (
    <>
      <NotificationBar />
      <NavigationBar />
      <HeroSection />
      <BrandLogos />
      <ProductCarousel />
      <ShopCollection />
      <BestSeller />
      <Banner />
    </>
  );
}

export default App;

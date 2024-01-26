import HeroSection from "./components/Hero Section/HeroSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotificationBar from "./components/NotificationBar/NotificationBar";

function App() {
  return (
    <>
      <NotificationBar />
      <NavigationBar />
      <HeroSection />;
    </>
  );
}

export default App;

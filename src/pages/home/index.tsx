import BrowseSection from "./sections/browse-section";
import HeroSection from "./sections/hero-section";
import ProductGrid from "./sections/product-grid";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <BrowseSection />
    </>
  );
};

export default Home;

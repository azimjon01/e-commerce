import BrowseSection from "./sections/browse-section";
import CardGrid from "./sections/card-grid";
import HeroSection from "./sections/hero-section";
import ProductGrid from "./sections/product-grid";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <BrowseSection />
      <CardGrid />
    </>
  );
};

export default Home;

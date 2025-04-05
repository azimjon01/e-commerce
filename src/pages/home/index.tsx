import BrowseSection from "./sections/browse-section";
import CardGrid from "./sections/card-grid";
import DiscountProducts from "./sections/discount-products";
import HeroSection from "./sections/hero-section";
import ProductGrid from "./sections/product-grid";
import ProductsSection from "./sections/products-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <BrowseSection />
      <CardGrid />
      <ProductsSection />
      <DiscountProducts />
    </>
  );
};

export default Home;

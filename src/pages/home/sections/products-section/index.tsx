import { products } from "../../../../data/products";
import { Card, Container, Desc, Image, ShopBtn, Title } from "./styles";

const ProductsSection = () => {
  return (
    <Container>
      {products.map((product, index) => (
        <Card key={index}>
          <Image src={product.imageUrl} alt={product.description} />
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          <ShopBtn>Shop Now</ShopBtn>
        </Card>
      ))}
    </Container>
  );
};

export default ProductsSection;

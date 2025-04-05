import { products } from "../../../../data/products";
import {
  Container,
  Header,
  Card,
  ProductImage,
  Title,
  Price,
  BuyButton,
  DiscountIcon,
} from "./styles";

const DiscountProducts = () => {
  return (
    <Container>
      <Header>Discounts up to -10%+</Header>
      {products
        .filter((product) => product.discount > 10)
        .map((product, id) => (
          <Card key={id}>
            <DiscountIcon>{product.discount}%</DiscountIcon>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <Title>{product.description}</Title>
            <Price>
              <s>{product.price}$</s> -{" "}
              <strong>{(product.price / 100) * product.discount}$</strong>
            </Price>
            <BuyButton>Buy Now</BuyButton>
          </Card>
        ))}
    </Container>
  );
};

export default DiscountProducts;

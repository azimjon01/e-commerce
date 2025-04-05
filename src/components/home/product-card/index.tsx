import { BuyButton, Card, Favorite, Image, Price, Title } from "./styles";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  available: boolean;
  isFavorite: boolean;
}

export const ProductCard = ({
  name,
  description,
  price,
  imageUrl,
  isFavorite,
}: ProductProps) => {
  return (
    <Card>
      <Favorite isActive={isFavorite}>❤️</Favorite>
      <Image src={imageUrl} alt={name} />
      <Title>{description}</Title>
      <Price>{price}</Price>
      <BuyButton>Buy Now</BuyButton>
    </Card>
  );
};

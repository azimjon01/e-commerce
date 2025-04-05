import {
  BigCard,
  Button,
  Container,
  Description,
  Image,
  InformationCard,
  SideCard,
  SmallLeft,
  SmallRight,
  Title,
} from "./styles";

const ProductGrid = () => {
  return (
    <Container>
      <BigCard>
        <Image
          src="/assets/images/home/product-grid/playstation.png"
          alt="PlayStation 5"
        />
        <InformationCard>
          <Title>Playstation 5</Title>
          <Description>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </Description>
        </InformationCard>
      </BigCard>
      <SideCard>
        <InformationCard>
          <Title>Macbook Air</Title>
          <Description>
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </Description>
          <Button>Shop Now</Button>
        </InformationCard>
        <Image
          src="/assets/images/home/product-grid/macbook.png"
          alt="Macbook Air"
        />
      </SideCard>
      <SmallLeft>
        <Image
          src="/assets/images/home/product-grid/headphone.png"
          alt="Apple AirPods Max"
        />
        <InformationCard>
          <Title>Apple AirPods Max</Title>
          <Description>Computational audio. Listen, it’s powerful.</Description>
        </InformationCard>
      </SmallLeft>
      <SmallRight>
        <Image
          src="/assets/images/home/product-grid/glassess.png"
          alt="Apple Vision Pro"
        />
        <InformationCard>
          <Title>Apple Vision Pro</Title>
          <Description>
            An immersive way to experience entertainment.
          </Description>
        </InformationCard>
      </SmallRight>
    </Container>
  );
};

export default ProductGrid;

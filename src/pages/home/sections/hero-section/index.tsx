import {
  BigTitle,
  Button,
  HeroSectionContainer,
  Image,
  Subtitle,
  TextContent,
  Title,
  TitlePro,
} from "./styles";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <TextContent>
        <BigTitle>Pro.Beyond.</BigTitle>
        <Title>
          iPhone 14 <TitlePro>Pro</TitlePro>
        </Title>
        <Subtitle>
          Created to change everything for the better. For everyone.
        </Subtitle>
        <Button>Shop Now</Button>
      </TextContent>
      <Image src="/assets/images/home/hero-image.png" alt="iPhone 14 Pro" />
    </HeroSectionContainer>
  );
};

export default HeroSection;

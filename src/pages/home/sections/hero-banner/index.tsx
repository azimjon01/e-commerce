import { Styled } from "./styles";

export const HeroBanner: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Image
        src="/assets/images/home/hero-banner/phone.png"
        alt="Phone"
        style={{ top: "10%", left: "5%" }}
      />
      <Styled.Image
        src="/assets/images/home/hero-banner/tablet.png"
        alt="Tablet"
        style={{ bottom: "5%", left: "10%" }}
      />
      <Styled.Image
        src="/assets/images/home/hero-banner/watch.png"
        alt="Watch"
        style={{ bottom: "0%", right: "20%" }}
      />
      <Styled.Image
        src="/assets/images/home/hero-banner/iphone.png"
        alt="iPhone"
        style={{ top: "0", right: "4%" }}
      />

      <Styled.Content>
        <Styled.Title>
          Big Summer <span>Sale</span>
        </Styled.Title>
        <Styled.Subtitle>
          Commodo fames vitae leo mauris in. Eu consequat.
        </Styled.Subtitle>
        <Styled.Button>Shop Now</Styled.Button>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

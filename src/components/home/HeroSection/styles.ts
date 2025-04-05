import styled from "@emotion/styled";

export const HeroSectionContainer = styled.div({
  minHeight: 500,
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
});

export const TextContent = styled.div({
  position: "absolute",
  top: 140,
  left: 150,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 20,
});

export const BigTitle = styled.h1({
  color: "#909090",
  fontSize: 20,
  fontWeight: 500,
});

export const Title = styled.h1({
  fontSize: "70px",
  fontWeight: "200",
});

export const TitlePro = styled.span({
  fontSize: "80px",
  fontWeight: "500",
});

export const Subtitle = styled.p({
  color: "#909090",
  fontSize: "17px",
  opacity: 0.8,
  fontWeight: 500,
});

export const Button = styled.button({
  width: "40%",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#ffffff",
  color: "#000",
  border: "1px solid #000",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "0.3s",
  ":hover": {
    backgroundColor: "#ddd",
  },
});

export const Image = styled.img({
  position: "absolute",
  top: 60,
  right: 150,
  width: 300,
  height: 700,
});

import styled from "@emotion/styled";

export const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "20px",
  padding: "40px",
});

export const Header = styled.h2(({ theme }) => ({
  gridColumn: "1 / -1",
  fontSize: "20px",
  marginBottom: "10px",
  color: theme.colors.text,
}));

export const Card = styled.div(({ theme }) => ({
  background: theme.colors.background,
  padding: "20px",
  borderRadius: theme.borderRadius,
  boxShadow: theme.shadows.md,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",
}));

export const DiscountIcon = styled.div((props) => ({
  position: "absolute",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 10,
  right: 5,
  background: props.theme.colors.text,
  color: props.theme.colors.background,
  borderRadius: "50%",
}));

export const HeartIcon = styled.span(({ theme }) => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  fontSize: "18px",
  color: theme.colors.text,
  cursor: "pointer",
}));

export const ProductImage = styled.img({
  width: "100%",
  height: "160px",
  objectFit: "contain",
});

export const Title = styled.h4(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: theme.colors.text,
  margin: 0,
}));

export const Price = styled.p(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  color: theme.colors.text,
  margin: 0,
}));

export const BuyButton = styled.button((props) => ({
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: props.theme.colors.text,
  color: props.theme.colors.background,
  border: `1px solid ${props.theme.colors.text}`,
  cursor: "pointer",
  borderRadius: "5px",
  transition: "0.3s",
  ":hover": {
    backgroundColor: props.theme.colors.background,
    color: props.theme.colors.text,
  },
}));

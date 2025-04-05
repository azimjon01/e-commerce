import styled from "@emotion/styled";

export const Card = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.background,
  color: theme.colors.text,
  boxShadow: theme.shadows.md,
  borderRadius: "12px",
  padding: "16px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.03)",
  },
}));

export const Image = styled.img({
  width: "100px",
  height: "100px",
  objectFit: "contain",
  marginBottom: "10px",
});

export const Title = styled.div({
  fontSize: "14px",
  fontWeight: 500,
  minHeight: "40px",
});

export const Price = styled.div({
  fontSize: "16px",
  fontWeight: "bold",
  margin: "8px 0",
});

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

export const Favorite = styled.div<{ isActive?: boolean }>(({ isActive }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  fontSize: "18px",
  color: isActive ? "red" : "#ccc",
}));

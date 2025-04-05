import styled from "@emotion/styled";

export const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  padding: "40px",
});

export const Card = styled.div<{ dark?: boolean }>(({ theme, dark }) => ({
  background: dark ? theme.colors.text : theme.colors.background,
  color: dark ? theme.colors.background : theme.colors.text,
  padding: "24px",
  borderRadius: theme.borderRadius,
  boxShadow: theme.shadows.lg,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "16px",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.03)",
  },
}));

export const Image = styled.img({
  width: "100%",
  height: "auto",
  objectFit: "contain",
});

export const Title = styled.h3({
  fontSize: "20px",
  fontWeight: 600,
  margin: 0,
});

export const Desc = styled.p({
  fontSize: "14px",
  lineHeight: "1.5",
  margin: 0,
});

export const ShopBtn = styled.button((props) => ({
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

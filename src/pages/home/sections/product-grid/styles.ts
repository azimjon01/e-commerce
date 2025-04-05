import styled from "@emotion/styled";

export const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "24.25% 24.25% 48.5%",
  gridTemplateRows: "auto auto auto",
  padding: 20,
  gap: 20,
});

export const Card = styled.div((props) => ({
  padding: "20px",
  overflow: "hidden",
  display: "flex",
  gap: 10,
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: props.theme.shadows.lg,
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
}));

export const BigCard = styled(Card)({
  gridColumn: "1 / span 2",
  gridRow: "1 / span 1",
});

export const SideCard = styled(Card)({
  gridColumn: "3 / span 1",
  gridRow: "1 / span 2",
});

export const SmallLeft = styled(Card)({
  gridColumn: "1 / span 1",
});

export const SmallRight = styled(Card)({
  gridColumn: "2 / span 1",
});

export const Image = styled.img({
  width: "40%",
  height: "auto",
  borderRadius: "8px",
});

export const InformationCard = styled.div({
  display: "flex",
  gap: 10,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
});

export const Title = styled.h2({
  fontSize: "24px",
  fontWeight: "bold",
});

export const Description = styled.p((props) => ({
  fontSize: "16px",
  color: props.theme.colors.text,
}));

export const Button = styled.button((props) => ({
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

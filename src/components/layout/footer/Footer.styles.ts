import styled from "@emotion/styled";

export const FooterContainer = styled.footer((props) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "50px 10%",
  backgroundColor: props.theme.colors.background || "#000",
  color: props.theme.colors.text || "#fff",
}));

export const FooterSection = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: "300px",
});

export const Logo = styled.div((props) => ({
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: props.theme.font.heading,
}));

export const Description = styled.p({
  fontSize: "14px",
  marginTop: "10px",
  lineHeight: "1.5",
});

export const SocialIcons = styled.div({
  display: "flex",
  gap: "15px",
  marginTop: "20px",
  fontSize: "18px",
  "& svg": {
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007bff",
    },
  },
});

export const SectionTitle = styled.h4((props) => ({
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "15px",
  fontFamily: props.theme.font.heading,
}));

export const List = styled.ul({
  listStyle: "none",
  padding: 0,
});

export const ListItem = styled.li((props) => ({
  fontSize: "14px",
  marginBottom: "10px",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: props.theme.colors.primary,
  },
}));

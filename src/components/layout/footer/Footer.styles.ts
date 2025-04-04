import styled from "@emotion/styled";

export const FooterContainer = styled.footer({
  display: "flex",
  justifyContent: "space-between",
  padding: "50px 10%",
  backgroundColor: "#000",
  color: "#fff",
});

export const FooterSection = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: "300px",
});

export const Logo = styled.div({
  fontSize: "24px",
  fontWeight: "bold",
});

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

export const SectionTitle = styled.h4({
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "15px",
});

export const List = styled.ul({
  listStyle: "none",
  padding: 0,
});

export const ListItem = styled.li({
  fontSize: "14px",
  marginBottom: "10px",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#007bff",
  },
});

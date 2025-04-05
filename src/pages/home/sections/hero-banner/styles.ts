import styled from "@emotion/styled";

export const Styled = {
  Wrapper: styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: props.theme.colors.background,
    color: props.theme.colors.text,
    padding: "4rem 2rem",
    minHeight: "400px",
    overflow: "hidden",
  })),
  Content: styled.div({
    zIndex: 2,
    textAlign: "center",
  }),
  Title: styled.h1({
    fontSize: "3rem",
    fontWeight: 300,
    span: {
      fontWeight: 700,
    },
  }),
  Subtitle: styled.p({
    fontSize: "1rem",
    margin: "1rem 0",
    opacity: 0.8,
  }),
  Button: styled.button((props) => ({
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
  })),
  Image: styled.img({
    position: "absolute",
    zIndex: 1,
    maxWidth: "180px",
    objectFit: "contain",
  }),
};

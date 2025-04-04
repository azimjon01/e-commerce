import styled from "@emotion/styled";

const LayoutWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
  background: "",
});

const MainContent = styled.main({
  flex: 1,
  display: "flex",
  justifyContent: "center",
});

const Container = styled.div({
  width: "100%",
  margin: "0 auto",
});

export { LayoutWrapper, MainContent, Container };

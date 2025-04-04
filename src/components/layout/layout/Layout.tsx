import Footer from "../footer";
import Header from "../header";
import { Container, LayoutWrapper, MainContent } from "./Layout.styles";
import { LayoutProps } from "./Layout.types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutWrapper>
        <Header />
        <MainContent>
          <Container>{children}</Container>
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;

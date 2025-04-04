import Footer from "../footer";
import Header from "../header";
import { Container, LayoutWrapper, MainContent } from "./Layout.styles";
import { LayoutProps } from "./Layout.types";

const Layout = ({ children, toggleTheme }: LayoutProps) => {
  return (
    <>
      <LayoutWrapper>
        <Header toggleTheme={toggleTheme} />
        <MainContent>
          <Container>{children}</Container>
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;

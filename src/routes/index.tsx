import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/layout";
import GlobalStyles from "../styles/global";
import { Global } from "@emotion/react";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout>
                  <Home />
                </Layout>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/layout";
import GlobalStyles from "../styles/global";
import { Global } from "@emotion/react";
import Home from "../pages/home";

// 🚀 Route konfiguratsiyasi obyekt shaklida
const ROUTES_CONFIG = [
  {
    path: "/",
    element: <Home />,
  },
  // Keyinchalik boshqa sahifalar qo‘shish oson:
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
];

type AppRoutesProps = {
  toggleTheme: () => void;
};

const AppRoutes = ({ toggleTheme }: AppRoutesProps) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes>
          {ROUTES_CONFIG.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<Layout toggleTheme={toggleTheme}>{element}</Layout>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

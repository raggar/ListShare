import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Search, Lists } from "./pages";
import { UserContextProvider } from "./contexts/UserContext";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.css";
import { BaseRoute } from "./constants/routes";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={BaseRoute.HOME} element={<Home />} />
      <Route path={BaseRoute.SEARCH} element={<Search />} />
      <Route path={BaseRoute.LISTS} element={<Lists />} />
    </Routes>
  </BrowserRouter>
);

const App: React.FC = () => (
  <>
    <p>Hello</p>
    {/* <GlobalStyle /> */}
    {/* <UserContextProvider> */}
    {/*   <AppRoutes /> */}
    {/* </UserContextProvider> */}
  </>
);

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Search, Lists, Profile } from "./pages";
import { UserContextProvider } from "./contexts/UserContext";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.css";
import { BaseRoute } from "./constants/routes";
import SideNav from "./components/SideNav";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <SideNav />
    <Routes>
      <Route path={BaseRoute.HOME} element={<Home />} />
      <Route path={BaseRoute.SEARCH} element={<Search />} />
      <Route path={BaseRoute.LISTS} element={<Lists />} />
      <Route path={BaseRoute.PROFILE} element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  </>
);

export default App;

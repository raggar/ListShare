import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Search, Lists, Profile } from "./pages";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.css";
import { BaseRoute } from "./constants/routes";
import SideNav from "./components/SideNav";

const AppContent: React.FC = () => (
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

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContent />
    </>
  );
}

export default App;

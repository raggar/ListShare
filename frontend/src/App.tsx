import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./pages/Search";
import Lists from "./pages/Lists";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="lists" element={<Lists />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;

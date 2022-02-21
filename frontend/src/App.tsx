import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Search, Lists } from "./pages";
import { AuthProvider } from "./contexts/AuthContextProvider";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.css";
import { BaseRoute } from "./constants/routes";
import { QueryClientProvider } from "react-query";
import { queryCache } from "./api";

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
  <QueryClientProvider client={queryCache}>
    <GlobalStyle />
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

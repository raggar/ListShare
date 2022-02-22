import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Search, Lists } from "./pages";
import { AuthProvider, AuthContext } from "./contexts/AuthContextProvider";
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

function App() {
  const { user } = useContext(AuthContext);
  return (
    <QueryClientProvider client={queryCache}>
      <GlobalStyle />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </QueryClientProvider>
  );
  // return user != null ? (
  //   <QueryClientProvider client={queryCache}>
  //     <GlobalStyle />
  //     <AuthProvider>
  //       <AppRoutes />
  //     </AuthProvider>
  //   </QueryClientProvider>
  // ) : (
  //   <h1>You are not authorized to view this application.</h1>
  // );
}

export default App;

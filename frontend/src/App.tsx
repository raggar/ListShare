import React from "react";
import { UserContextProvider } from "./contexts/UserContext";

const Content: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <div>Hello World</div>
    </header>
  </div>
);

function App() {
  return (
    <UserContextProvider>
      <Content />
    </UserContextProvider>
  );
}

export default App;

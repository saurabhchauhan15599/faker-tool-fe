import React from "react";
import Header from "./components/common/header";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Dashboard />
    </React.Fragment>
  );
}

export default App;

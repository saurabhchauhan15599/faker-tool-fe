import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/scss/main.scss';
import Dashboard from "./views/dashboard";

function App() {
  return (
    <React.Fragment>
      <Dashboard />
      <ToastContainer
        autoClose={4000}
        position="top-center"
        closeButton={false}
        hideProgressBar
        pauseOnFocusLoss={false}
        closeOnClick={false}
        limit={3}
      />
    </React.Fragment>
  );
}

export default App;

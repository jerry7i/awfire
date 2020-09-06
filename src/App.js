import React from "react";
import "./App.css";

import Landing from "./pages/Landing/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <Footer />
    </>
  );
}

export default App;

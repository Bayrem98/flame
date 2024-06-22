import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbard from "./component/parts/Navbard";
import Home from "./component/pages/Home";
import Footer from "./component/parts/Footer";
import Inscription from "./component/parts/Inscription";
import { Route, Routes } from "react-router-dom";
import NosProduits from "./component/pages/NosProduits";

function App() {
  return (
    <>
      <div className="App">
        <Navbard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/nosproduits" element={<NosProduits />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
// import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../src/pages/homepage";
import Footer from "../src/components/footer";
import Resume from "../src/pages/resume";
import Projects from "../src/pages/projects";
import Hobby from "../src/pages/hobby";
import Sports from "../src/components/sports";
import Cooking from "../src/components/cooking";
import Books from "../src/components/books";
import Travel from "../src/components/travel";
import Music from "../src/components/music";
import Contact from "../src/pages/contact";
import ThankYou from "./pages/thankYou";
import Header from "../src/components/header";
import Mobilemenu from "../src/components/mobile-menu";

function App() {
  return (
    <Router>
      <Header />
      <Mobilemenu />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobby" element={<Hobby />} >
          <Route path="sports" element={<Sports />} />
          <Route path="cooking" element={<Cooking />} />
          <Route path="books" element={<Books />} />
          <Route path="travel" element={<Travel />} />
          <Route path="music" element={<Music />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

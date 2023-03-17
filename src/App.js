import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import ContactForm from "./components/contactform/ContactForm";
import ProjectImage from "./components/projectimage/ProjectPage"; // Import the new component

import "./assets/styles/App.css";
import "./assets/styles/Header.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="Header">
          <header>
            <h2 className="personName">Deric Ward</h2>
            <h3 className="portfolioName">Portfolio</h3>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contactForm">Contact</NavLink>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/project/:id" element={<ProjectImage />} />
          </Routes>
        </div>

        <div className="Footer">
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;

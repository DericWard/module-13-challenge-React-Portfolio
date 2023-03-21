import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

import ProjectImage from "./components/projectpage/ProjectPage"; // Import the new component

import{ ContactForm, Footer, Header} from './components'

import "./assets/styles/App.css";
import "./assets/styles/Header.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="Header">
          <Header />
            
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

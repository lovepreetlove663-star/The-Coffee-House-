import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css"
import Footer from "./components/Footer"
createRoot(document.getElementById("root")).render(
  <StrictMode>
       <About />    
      <Gallery />   
     <Contact />
     <Footer />
  </StrictMode>
);


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

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";

// import "./App.css";

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <Home />,
//   // },
//   {
//     path: "/",
//     element: <About />,
//   },
//   {
//     path: "/gallery",
//     element: <Gallery />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
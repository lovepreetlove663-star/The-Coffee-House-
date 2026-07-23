import Router from "./router/Router";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Router />
      <Navbar />
      
      <Footer />
    </div>
  );
}

export default App;

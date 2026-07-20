import Navbar from "./components/Navbar";
import Router from "./router/Router";

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;

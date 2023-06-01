import "./App.css";
import Main from "./components/public/Main";
import Details from "./components/public/Details";
import Footer from "./components/public/Footer";
import Navbar from "./components/public/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/p" element={<p />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import About from "./pages/About";

import "./style/style.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading, setIsLoading);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

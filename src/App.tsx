import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navegacao";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Sobre from "./pages/sobre";
import { AppProvider } from "./contexts/appContext";


function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

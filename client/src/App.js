import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/countries" element={<HomePage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Pages/Landing/LandingPage";
// import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
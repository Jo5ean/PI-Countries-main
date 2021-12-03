import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import HomePage from "./Pages/Home/HomePage";
import Search from "./Components/Search";
import Details from "./Components/Details"

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/countries" element={<HomePage />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/country/:id" element={<Details />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
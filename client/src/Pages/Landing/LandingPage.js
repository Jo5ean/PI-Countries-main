import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

function Landing() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    //para evitar la accion por default (redirigirme al /loquetengadentro)
    e.preventDefault();
    navigate("/countries");
  };

  return (
    <div className="landing">
      <h1 className="title"> Welcome to the world of</h1>
      <button className="button" onClick={handleClick} >
        countries

      </button>
      <Link to="/home">
        <img className="logo" src="https://www.countryflags.io/es/flat/64.png" alt="logo" />
      </Link>
    </div> );
}
export default Landing;
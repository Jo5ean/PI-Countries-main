import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Cards = (props) => {
  let { countries } = props;
  return (
    <div className="cards">
      {countries.map((c, index) => (
        <Link key={index} to={`/country/${c.id}`}>
          <Card
            className="card"
            name={c.name}
            flag={c.flag}
            region={c.region}
            key={c.id}
          />
        </Link>
      ))}
    </div>
  );
};

export default Cards;

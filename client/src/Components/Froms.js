import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Forms = () => {
  let [country, setCountry] = useState("");
  let [activity, setActivity] = useState({
    name: "",
    countries: [],
    dificulty: "1",
    duration: "",
  });
  let countriesList = useSelector((state) => state.countries);

  const handleChange = (e) => {
    e.preventDefault();
    let nam = e.target.name;
    let val = e.target.value;
    setActivity({
      ...activity,
      [nam]: val,
    });
  };
  let validateCoutry = (e) => {
    return countriesList.some((c) => c.name === e);
  };
  let addCountry = (e) => {
    e.preventDefault();
    if (validateCoutry(country)) {
      setActivity({
        ...activity,
        countries: [...activity.countries, country],
      });
      setCountry("");
    } else {
      alert("Invalid Country");
    }
  };
  let deleteCountry = (e) => {
    e.preventDefault();
    let index = e.target.name;
    let newCountries = activity.countries.filter((c) => c !== index);
    setActivity({
      ...activity,
      countries: newCountries,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let { name, dificulty, duration, season } = activity;
    activity.countries.map((country) =>
      axios.post("http://localhost:3001/activity/country", {
        country,
        name,
        dificulty,
        duration,
        season,
      })
    );
    alert("Activity Added");
  };
  return (
    <div>
      <form>
        <div>
          <h4>Add Activity</h4>
        </div>
        <label>Activity Name:</label>
        <br />
        <input type="text" name="name" onChange={handleChange} />
        <div>
          <label>Dificulty({activity.dificulty}:)</label>
          <br />
          <input
            type="range"
            name="dificulty"
            min="1"
            max="5"
            step="1"
            onChange={handleChange}
          />
          <br />
          <label>Duration:</label>
          <br />
          <input type="number" name="duration" onChange={handleChange} />
          <br />
          <label>Season:</label>
          <br />
          <input type="text" name="season" onChange={handleChange} />
          <br />
        </div>
        <div>
          <label>Country:</label>
          <br />
          <input
            type="text"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
          <button onClick={addCountry}>Add Country</button>
          <br />
          {Array.isArray(activity.countries) &&
            activity.countries.map((c) => (
              <label>
                {" "}
                {c}{" "}
                <button name={c} onClick={deleteCountry}>
                  X
                </button>
              </label>
            ))}
        </div>
        <button value="Add activity" onClick={handleSubmit}>
          {" "}
          Confirm..{" "}
        </button>
      </form>
    </div>
  );
};

export default Forms;

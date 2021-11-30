import React from "react";

const Card = ( props ) => {
    let { flag, name, region } = props;
    return (
        <div>
            <img src={flag} alt={name} />
            <h3>{name}</h3>
            <p>{region}</p>
        </div>
    );
};

export default Card;
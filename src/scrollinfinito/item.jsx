import React from "react";
import "../App.css";

export const Item = (props) => {
  const { image, name, species } = props;
  return (
    <article className="Card">
      <img src={image} alt="name" className="characterImage"/>
      <h2>{name}</h2>
      <div className="span"> 
          <span>{species}</span>
      </div>
    </article>
  );
};

import React from "react";

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.image} alt="" />
      <p>Movie : {props.title}</p>
      <p>Year : {props.year}</p>
    </div>
  );
};

export default Movie;

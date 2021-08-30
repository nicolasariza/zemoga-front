import React from "react";

const Main = ({ portfolio }) => {
  return (
    <div className="contenedor">
    <hr/>
    <div className="tweets">tweets</div>
    <hr/>
    <div className="info">{portfolio.experience}</div>
    </div>
  );
};

export default Main;
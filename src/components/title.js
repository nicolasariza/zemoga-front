import React from "react";

const Title = ({ portfolio }) => {
  return (
    <>
    <header className="App-header">
        {portfolio.name}
    </header>
    <img src={portfolio.profile_image} alt="Avatar"></img>
    </>
  );
};

export default Title;
import React from "react";

import Navigation from "./Navigation";
import Points from "./Points";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div
        style={{
          margin: 20,
        }}
      >
        <Points />
      </div>
    </div>
  );
};

export default Home;

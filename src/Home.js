import React from "react";

const Home = () => {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          window.location.assign(process.env.REACT_APP_HOME_URL);
        }}
      >
        Sign in with Instagram
      </button>
    </div>
  );
};

export default Home;

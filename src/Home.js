import React from "react";

const Home = () => {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          window.location.assign(
            "https://api.instagram.com/oauth/authorize?app_id=2510132262600614&redirect_uri=https://instascrap-6263d.firebaseapp.com/Auth&scope=user_profile,user_media&response_type=code"
          );
        }}
      >
        Sign in with Instagram
      </button>
    </div>
  );
};

export default Home;

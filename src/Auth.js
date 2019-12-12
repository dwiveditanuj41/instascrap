import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import { db } from "./Config";

const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

const Auth = () => {
  const [userData, setUserData] = useState(null);
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const values = queryString.parse(window.location.search);

    var bodyFormData = new FormData();
    bodyFormData.set("app_id", "2510132262600614");
    bodyFormData.set("app_secret", "d3cc3609837dc1d2249cd92b6d336f38");
    bodyFormData.set("grant_type", "authorization_code");
    bodyFormData.set(
      "redirect_uri",
      "https://instascrap-6263d.firebaseapp.com/Auth"
    );
    bodyFormData.set("code", values.code);

    axios({
      method: "post",
      url: "https://api.instagram.com/oauth/access_token",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(function(response) {
        setUserData(response);
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });
  }, []);

  if (userData && !media) {
    axios({
      method: "get",
      url: `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username&access_token=${userData.data.access_token}`
    })
      .then(async response => {
        const responseObject = arrayToObject(response.data.data);
        const res = await db
          .collection("users")
          .doc(userData.data.user_id.toString())
          .set(responseObject);

        setMedia(responseObject);
      })
      .catch(function(response) {
        console.log(response);
      });

    return <div>loading...</div>;
  }

  if (media) {
    window.location.assign(
      `https://instascrap-6263d.firebaseapp.com/${userData.data.user_id}`
    );
  }
  return null;
};

export default Auth;

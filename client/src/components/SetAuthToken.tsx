import Axios from "axios";
import React from "react";
import axios from "axios";

type FormElem = React.FormEvent<HTMLFormElement>;

const SetAuthToken = (token: FormElem) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete Axios.defaults.headers.common["x-auth-token"];
  }
};

export default SetAuthToken;

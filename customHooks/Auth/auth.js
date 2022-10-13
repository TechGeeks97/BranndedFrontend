import React, { useState, useCallback } from "react";
import { setUser } from "../../services/user";
import { branded } from "../../networks/interceptor";
import { auth } from "../../networks/api-urls";
const Auth = () => {
  const [loading, setLoading] = useState(false);
  const login = async (body, navigation) => {
    try {
      setLoading(true);

      let response = await branded().post(auth.login, body);
      if (response.status == 200) {
        setLoading(false);
        await setUser(response.data.data);
        navigation.replace("HomeStack");
      }
      console.log("response", response);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };
  const signup = async (body, nav) => {
    try {
      console.log("response", body);
      setLoading(true);

      let response = await branded().post(auth.signup, body);
      if (response.status == 200) {
        setLoading(false);

        alert("Signup Successfully");
        nav.goBack();
      }
      console.log("response", response);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };
  const sendOtp = async (body) => {
    try {
      setLoading(true);

      let response = await branded().post(auth.sendOtp, body);
      if (response.status == 200) {
        setLoading(false);

        alert("Opt send Successfully");
      }
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };

  return { login, signup, sendOtp, loading };
};

export default Auth;

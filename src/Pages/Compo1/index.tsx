import * as React from "react";
import axiosInstance from "../../common-components/axiosInstance";

const Compo1: React.FC = () => {
  const loadIntialData = async () => {
    const payload = {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30, // optional, defaults to 60
    };
    const data = await axiosInstance.post(
      "https://dummyjson.com/auth/login",
      payload,
    );
    console.log("DATA", data);
  };

  React.useEffect(() => {
    loadIntialData();
  }, []);

  return <div>Component 1</div>;
};

export default Compo1;

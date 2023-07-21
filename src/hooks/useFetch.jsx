import { useState, useEffect } from "react";

const useFetch = username => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (response.status === 200) {
          setUserInfo({ status: "success", response: await response.json() });
        } else {
          setUserInfo({ status: "fail" });
        }
      } catch (error) {
        setUserInfo({ status: "fail", message: error.message });
      }
    };
    getInfo();
  }, [username]);

  return userInfo;
};

export default useFetch;

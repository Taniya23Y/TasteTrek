import { useState, useEffect } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch the data
  useEffect(() => {
    fetchData();
  }, [resId]);

  // const fetchData = async () => {
  //   const data = await fetch(Menu_API + resId);
  //   console.log(Menu_API + resId);

  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json);
  // };

  const fetchData = async () => {
    try {
      const data = await fetch(Menu_API + resId);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  

  return resInfo;
};

export default useRestaurantMenu;

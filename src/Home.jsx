import React, { useEffect, useState } from "react";
import Banner from "./assets/components/Banner";
import Stats from "./assets/components/Stats";
import TrendingApps from "./assets/components/TrendingApps";

const Home = () => {
  const [apps8, setApps8] = useState([]);
  useEffect(() => {
    fetch("/appsdata8.json")
      .then((res) => res.json())
      .then((data) => setApps8(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApps apps8={apps8}></TrendingApps>
    </div>
  );
};

export default Home;

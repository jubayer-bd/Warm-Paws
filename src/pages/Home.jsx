import React, { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";

import WinterCareTips from "../components/WinterCare";
import MeetOurVets from "../components/MeetOurVets";
import SuccessStories from "../components/SuccessStories";
import TopRatedServices from "../components/TopRatedServices";

import PageLoader from "../components/PageLoader";
const Home = () => {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  if (pageLoading) return <PageLoader />;
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSlider />

      <TopRatedServices />
      <WinterCareTips />
      <MeetOurVets />
      <SuccessStories />
    </div>
  );
};

export default Home;

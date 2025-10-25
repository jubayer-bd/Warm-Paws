import React, { useEffect, useState } from "react";
import CardsContainer from "../components/CardsContainer";
import PageLoader from "../components/PageLoader";

const Service = () => {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  if (pageLoading) return <PageLoader />;
  return (
    <div className="py-10">
      <CardsContainer />
    </div>
  );
};

export default Service;

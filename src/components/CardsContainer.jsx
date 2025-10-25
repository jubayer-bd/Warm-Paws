import React, { use } from "react";
import Card from "./Card";
const cardPromise = fetch("/services.json").then((res) => res.json());
const CardsContainer = () => {
  const cardDetails = use(cardPromise);
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {cardDetails.map((detail, ind) => (
        <Card key={ind} detail={detail}></Card>
      ))}
    </div>
  );
};

export default CardsContainer;

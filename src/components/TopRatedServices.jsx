import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router";

const TopRatedServices = () => {
  const [topServices, setTopServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json") // ✅ public folder path
      .then((res) => res.json())
      .then((data) => {
        // Sort by rating and take top 6
        const sorted = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setTopServices(sorted);
      })
      .catch((err) => console.error("Error fetching services:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="py-10 mt-5 rounded-2xl bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          ⭐ Popular Winter Care Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((service) => (
            <Card key={service.serviceId} detail={service} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link
          to={"/services"}
          className="btn  rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
        >
          All Services 
        </Link>
      </div>
    </section>
  );
};

export default TopRatedServices;

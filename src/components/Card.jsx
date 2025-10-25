import React from "react";
import { Link } from "react-router"; // ✅ for navigation

const Card = ({ detail }) => {
  const { serviceId, serviceName, providerName, price, rating, image } = detail;

  return (
    <div className="card  bg-base-100 shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 border border-base-200">
      {/* Image */}
      <figure className="relative">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold text-primary">
          {serviceName}
        </h2>

        <p className="text-sm text-gray-600">By {providerName}</p>

        <div className="flex items-center justify-between mt-3  gap-20 lg:gap-40">
          <p className="text-base font-semibold text-secondary">
            💲{price} <span className="text-sm text-gray-500">/session</span>
          </p>
          <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
        </div>

        {/* Button */}
        <div className="mt-4">
          <Link
            to={`/service/${serviceId}`}
            className="btn btn-sm w-full rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

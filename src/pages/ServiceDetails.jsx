import React, { useState, useMemo, useEffect } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import PageLoader from "../components/PageLoader";

const ServiceDetails = () => {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const loaderData = useLoaderData(); // could be an array or a single object depending on your loader
  const { id } = useParams(); // id from route params (string)

  // Robust normalization: if loaderData is an object with many services or a single service
  const service = useMemo(() => {
    if (!loaderData) return null;

    // If loaderData is an array, find by serviceId or by id property
    if (Array.isArray(loaderData)) {
      return (
        loaderData.find(
          (s) =>
            String(s.serviceId) === String(id) ||
            String(s.id) === String(id) ||
            String(s.serviceId) === String(loaderData?.serviceId)
        ) || null
      );
    }

    // If loaderData is an object, it might be the desired service already,
    // or it might contain a field like data/services
    // Try common shapes:
    if (typeof loaderData === "object") {
      // If it's already the service (has serviceId)
      if (loaderData.serviceId && String(loaderData.serviceId) === String(id)) {
        return loaderData;
      }

      // If loaderData has a nested array like { services: [...] }
      if (Array.isArray(loaderData.services)) {
        return loaderData.services.find(
          (s) =>
            String(s.serviceId) === String(id) || String(s.id) === String(id)
        );
      }

      // If loaderData is a map keyed by id
      if (loaderData[id]) return loaderData[id];

      // Fallback: treat loaderData as the service even if ids don't match
      return loaderData;
    }

    return null;
  }, [loaderData, id]);

  // If not found, show a friendly message
  if (!service) {
    return (
      <div className="max-w-4xl mx-auto my-14 p-6 bg-base-100 rounded-lg shadow-sm">
        <p className="text-center text-lg">Service not found for id: {id}</p>
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-sm">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Destructure all expected fields (safe even if some are undefined)
  const {
    serviceId,
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = service;

  // Booking form state
  const [formData, setFormData] = useState({ name: "", email: "" });
  //loader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — just show toast and clear form
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };
  if (pageLoading) return <PageLoader />;
  return (
    <div className="max-w-6xl mx-auto mt-20 my-10 p-6 grid grid-cols-1 md:grid-cols-3 gap-8 bg-base-100 rounded-2xl shadow-md">
      {/* Left: Full details */}
      <div className="md:col-span-2">
        <div className="rounded-xl overflow-hidden border border-base-200">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {serviceName}
          </h1>

          <div className="flex flex-row items-center gap-4 mb-3">
            <p className="text-sm text-gray-600 ">
              <span className="font-semibold">Provider:</span> {providerName}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-sm text-yellow-500 font-semibold">⭐ {rating}</p>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">{description}</p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="text-2xl font-bold text-secondary">💲{price}</div>
            <div className="px-3 py-1 rounded-full bg-base-200 text-sm">
              Slots Available: {slotsAvailable}
            </div>
            <div className="px-3 py-1 rounded-full bg-base-200 text-sm">
              Service ID: {serviceId}
            </div>
          </div>

          <hr className="my-6" />
        </div>
      </div>

      {/* Right: Booking card */}
      <aside className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-center mb-4 text-primary">
          Book This Service
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="input input-bordered w-full rounded-full"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="input input-bordered w-full rounded-full"
          />

          <button
            type="submit"
            className="btn w-full rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
          >
            Book Now
          </button>
        </form>

        <div className="mt-5 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Provider Email:</span>{" "}
            <a
              href={`mailto:${providerEmail}`}
              className="text-blue-600 hover:underline"
            >
              {providerEmail}
            </a>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default ServiceDetails;

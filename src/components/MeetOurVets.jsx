import React from "react";
import { FaStethoscope, FaUserMd } from "react-icons/fa";

const vets = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    title: "Veterinary Surgeon",
    experience: "10+ years of experience in pet surgery and emergency care.",
    quote:
      "I believe every pet deserves love, comfort, and expert medical attention — just like family.",
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    title: "Animal Nutrition Specialist",
    experience: "8 years helping pets maintain healthy diets year-round.",
    quote:
      "A balanced diet can be the difference between good health and great health for your pet.",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    title: "Pet Behavior Consultant",
    experience: "7 years specializing in animal behavior and stress management.",
    quote:
      "Understanding your pet’s emotions is the first step to a happy and peaceful home.",
  },
  {
    id: 4,
    name: "Dr. David Rodriguez",
    title: "Exotic Pet Expert",
    experience: "5 years caring for birds, reptiles, and small mammals.",
    quote:
      "Every creature, no matter how small or unique, deserves gentle and knowledgeable care.",
  },
];

const MeetOurVets = () => {
  return (
    <section className="bg-base-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2">
          <FaStethoscope className="text-primary" />
          Meet Our Expert Vets
        </h2>
        <p className="text-gray-600 mb-10">
          Our team of compassionate and skilled veterinarians is here to ensure
          your pet’s health and happiness all year round 🐶🐱
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaUserMd className="text-primary text-2xl" />
                <div>
                  <h3 className="text-lg font-semibold">{vet.name}</h3>
                  <p className="text-sm text-gray-600">{vet.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">{vet.experience}</p>
              <blockquote className="text-sm italic text-gray-500 border-l-4 border-primary pl-3">
                “{vet.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurVets;

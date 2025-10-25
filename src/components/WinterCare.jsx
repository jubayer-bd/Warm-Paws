import React from "react";
import { FaSnowflake, FaPaw } from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Keep Them Warm",
    advice:
      "Provide extra blankets, cozy bedding, and make sure your pets sleep away from cold floors and drafts.",
  },
  {
    id: 2,
    title: "Limit Outdoor Time",
    advice:
      "Shorten walks during very cold days. Frostbite and hypothermia can happen quickly in pets.",
  },
  {
    id: 3,
    title: "Check Paws After Walks",
    advice:
      "Wipe your pet’s paws to remove ice, salt, and chemicals that may irritate or harm their skin.",
  },
  {
    id: 4,
    title: "Hydration is Key",
    advice:
      "Cold weather can make pets drink less. Make sure their water bowl doesn’t freeze and stays fresh.",
  },
  {
    id: 5,
    title: "Balanced Diet",
    advice:
      "Pets may need a little more food in winter to maintain body heat, but consult your vet before changing diets.",
  },
  {
    id: 6,
    title: "Keep Them Active Indoors",
    advice:
      "If it’s too cold to play outside, keep your pet entertained with indoor games and training sessions.",
  },
];

const WinterCareTips = () => {
  return (
    <section className="bg-base-200 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2">
          <FaSnowflake className="text-primary" /> Winter Care Tips for Pets
        </h2>
        <p className="text-gray-600 mb-10">
          Keep your furry friends healthy, cozy, and safe throughout the winter
          season ❄️
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-base-100 shadow-md rounded-2xl p-6 text-left hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                <FaPaw className="text-primary" />
                {tip.title}
              </h3>
              <p className="text-gray-700 text-sm">{tip.advice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;

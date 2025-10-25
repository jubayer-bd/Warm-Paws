import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Sophie & Max",
      feedback:
        "Thanks to WarmPaws, my dog Max stayed cozy and healthy this winter! Their care tips and vet advice made all the difference.",
      pet: "Golden Retriever",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      name: "Arif & Bella",
      feedback:
        "WarmPaws’ grooming guide helped Bella avoid dry skin. Love how practical and friendly their support is!",
      pet: "Persian Cat",
      location: "Chittagong, Bangladesh",
    },
    {
      id: 3,
      name: "Nusrat & Milo",
      feedback:
        "I booked an online vet consultation and it was amazing! Milo got better in just a few days.",
      pet: "Rabbit",
      location: "Sylhet, Bangladesh",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="stories">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Customer Success Stories
        </h2>
        <p className="text-gray-600 mb-10">
          Hear from pet owners who’ve trusted WarmPaws to keep their companions
          warm, happy, and healthy during the chilly months.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <p className="italic text-gray-700 mb-4">“{story.feedback}”</p>
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-primary">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {story.pet} • {story.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

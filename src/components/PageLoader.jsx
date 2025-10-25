import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaPaw } from "react-icons/fa";

const PageLoader = () => {
  const pawAnimation = useSpring({
    loop: true,
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-15px)" },
    config: { duration: 800 },
  });

  const textFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000 },
  });

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <animated.div style={pawAnimation}>
        <FaPaw className="text-primary text-6xl" />
      </animated.div>
      <animated.p
        style={textFade}
        className="mt-6 text-lg font-medium text-gray-600"
      >
        Warming up your paws 🐾...
      </animated.p>
    </div>
  );
};

export default PageLoader;

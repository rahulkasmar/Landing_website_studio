import React from "react";
import { motion as m } from "framer-motion";

const HeadAnimation = ({ text }) => {
  const letters = text.split("");
  return (
    <div>
      {letters.map((letter, i) => (
        <m.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          key={i}>
          {letter}
        </m.span>
      ))}
    </div>
  );
};

export default HeadAnimation;

import React from "react";

const Heading = ({ label, textSize }) => {
  return (
    <div>
      <h2
        className={
          textSize === "lg"
            ? "text-2xl lg:text-3xl"
            : textSize === "md"
            ? "text-xl lg:text-2xl"
            : textSize === "sm"
            ? "text-lg lg:text-xl"
            : "text-base"
        }
      >
        {label}
      </h2>
    </div>
  );
};

export default Heading;

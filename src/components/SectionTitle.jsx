import React from "react";

function SectionTitle({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-5xl text-center  font-bold mb-5 text-blue-500 dark:text-blue-500 "
    >
      {children}
    </h1>
  );
}

export default SectionTitle;

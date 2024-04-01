import React from "react";
import Header from "./header";

const DropDown = () => {
  const dropdownArray = [
    {
      id: 1,
      name: "Mobile Phones",
    },

    {
      id: 2,
      name: "Top Brand Phones",
    },

    {
      id: 3,
      name: "Mobile Phones Accessories",
    },
    {
      id: 4,
      name: "Top smartphones",
    },
  ];
  return (
    <div>
      {dropdownArray.map((options) => (
        <Header key={options.name} property={options} />
      ))}
    </div>
  );
};

export default DropDown;

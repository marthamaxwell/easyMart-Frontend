import React from "react";
import CollectionCard from "./collectionCard";
import speakersImg from "../../../assets/images/1st.png";
import computersImg from "../../../assets/images/2nd.png";
import clothesImg from "../../../assets/images/3rd.png";
import gadgetsImg from "../../../assets/images/4th.png";

const Collection = () => {
  const CollectionArray = [
    {
      id: 1,
      image: speakersImg,
      desc: "Accessories",
    },
    {
      id: 2,
      image: computersImg,
      desc: "Computers",
    },
    {
      id: 3,
      image: clothesImg,
      desc: "Clothes",
    },
    {
      id: 4,
      image: gadgetsImg,
      desc: "Gadgets",
    },
  ];
  return (
    <div className="flex flex-wrap w-[80%] mx-auto justify-center md:justify-between ">
      {CollectionArray.map((martha) => (
        <CollectionCard key={martha.id} property={martha} />
      ))}
    </div>
  );
};

export default Collection;

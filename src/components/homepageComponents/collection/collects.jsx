import React from "react";
import CollectionCard from "./collectionCard";

const COllection = () => {
  const CollectionArray = [
    {
      id: 1,
      image: TvImage,
    },
    {
      id: 2,
      image: TransImage,
    },
    {
      id: 3,
      image: PcImage,
    },
    {
      id: 4,
      image: DrugImage,
    },
  ];
  return (
    <div className="">
      {CollectionArray.map((martha) => (
        <CollectionCard key={martha.id} property={martha} />
      ))}
    </div>
  );
};

export default COllection;

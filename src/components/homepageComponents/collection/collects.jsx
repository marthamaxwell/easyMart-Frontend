import React from "react";
import CollectionCard from "./collectionCard";

const COllection = () => {
  const CollectionArray = [
    {
      id: 1,
      image: TvImage,
      name: "BILL PAYMENT",
      title: "Settle Electricity, Tv and Internet",
    },
    {
      id: 2,
      image: TransImage,
      name: "TRANSACTION",
      title: "Send and Receive Money",
    },
    {
      id: 3,
      image: PcImage,
      name: "SETTLE INVOICE",
      title: "Settle payments with ease",
    },
    {
      id: 4,
      image: DrugImage,
      name: "PHARMACY AND DRUGS",
      title: "Medical and Health care",
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

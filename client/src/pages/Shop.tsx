import React from "react";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <TypeBar />
        </div>
        <div className="col-span-9"></div>
      </div>
    </>
  );
};

export default Shop;

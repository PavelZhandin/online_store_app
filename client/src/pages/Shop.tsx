import React from "react";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-3">
        <div className="col-span-3">
          <TypeBar />
        </div>
        <div className="col-span-9">
          <BrandBar />
          <DeviceList />
        </div>
      </div>
    </>
  );
};

export default Shop;

import { Card, ListGroup } from "flowbite-react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      <ListGroup className="flex flex-wrap">
        {device?.brands.map((brand: any, index) => (
          <Card
            key={`${brand.id}-${index}`}
            style={{
              cursor: "pointer",
              borderColor: brand.id === device.selectedBrand ? "lightBlue" : "",
            }}
            onClick={() => (device.selectedBrand = brand.id)}
            className="m-3"
          >
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
              {brand.name}
            </h5>
          </Card>
        ))}
      </ListGroup>
    </>
  );
});

export default BrandBar;

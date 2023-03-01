import { ListGroup } from "flowbite-react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      <ListGroup className="flex flex-wrap">
        {device?.devices.map((deviceItem: any, index) => (
          <>
            <DeviceItem key={deviceItem.id + index} device={deviceItem} />
          </>
        ))}
      </ListGroup>
    </>
  );
});

export default DeviceList;

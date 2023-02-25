import { ListGroup } from "flowbite-react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="w-100">
      <ListGroup>
        {/* <ListGroup.Item>Profile</ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
        <ListGroup.Item>Messages</ListGroup.Item>
        <ListGroup.Item>Download</ListGroup.Item> */}
        {device?.types.map((type: any) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={type.id === device.selectedType}
            onClick={() => (device.selectedType = type.id)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;

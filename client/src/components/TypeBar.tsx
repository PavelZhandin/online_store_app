import { ListGroup } from "flowbite-react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="w-100">
      <ListGroup>
        {device?.types.map((type: any) => (
          <ListGroup.Item
            key={type.id}
            style={{ cursor: "pointer" }}
            active={type.id === device.selectedType}
            onClick={() => (device.selectedType = type.id)}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;

import { Card, ListGroup } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from "../utils/consts";

type Prop = {
  device: any;
};

const DeviceItem = ({ device }: Prop) => {
  const navigate = useNavigate();
  return (
    <>
      <ListGroup.Item
        onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
        style={{
          maxWidth: "250px",
          cursor: "pointer",
        }}
      >
        <Card imgSrc={process.env.REACT_APP_API_URL + device.img}>
          <div className="flex justify-between items-end ">
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
              {device.name}
            </h5>
            <div className="flex items-center">
              <div>{device.rating}</div>
              <img className="w-4 h-4" src={star} alt={"star.png"} />
            </div>
          </div>
          {/* <div className="text-start">{device.name}</div> */}
        </Card>
      </ListGroup.Item>
    </>
  );
};

export default DeviceItem;

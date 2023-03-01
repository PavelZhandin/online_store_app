import { Button, Card } from "flowbite-react";
import bigStar from "../assets/big_star.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDevices, fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  const [device, setDevice] = useState<any>({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(Number(id)).then((data) => setDevice(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-12 mt-4 ml-4">
        <div className="col-span-4">
          <img
            alt="product_image.png"
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </div>
        <div className="col-span-4">
          <h2 className="text-center">{device.name}</h2>
          <div
            className="flex items-center justify-center text-4xl"
            style={{
              background: `url(${bigStar}) no-repeat center center`,
              width: "200px",
              height: "200px",
              backgroundSize: "cover",
            }}
          >
            {device.rating}
          </div>
        </div>
        <div className="col-span-4">
          <Card className="w-80 flex flex-col items-center justify-around">
            <h3>От: {device.price} руб.</h3>
            <Button>Добавить в корзину</Button>
          </Card>
        </div>
      </div>
      <div className="flex flex-col m-4">
        <h1 className="text-3xl mb-2">Характеристики</h1>
        {device.info.map((info: any, index: number) => (
          <div
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightBlue" : "transparent",
            }}
          >
            {info.title}: {info.description}
          </div>
        ))}
      </div>
    </>
  );
};

export default DevicePage;

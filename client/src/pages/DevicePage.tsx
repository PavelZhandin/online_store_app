import { Button, Card } from "flowbite-react";
import bigStar from "../assets/big_star.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "12_pro",
    price: 100000,
    rating: 0,
    // img: "6cf34495-e6bd-47ee-96b7-ec2eda24b6ae.jpg",
    img: "https://flowbite.com/docs/images/blog/image-1.jpg",
    createdAt: "2023-02-05T13:15:17.558Z",
    updatedAt: "2023-02-05T13:15:17.558Z",
    basketId: null,
    typeId: 2,
    brandId: 1,
  };

  const description = [
    {
      id: 1,
      title: "Оперативная память",
      description: "5 гб",
    },
    {
      id: 2,
      title: "Оперативная память",
      description: "5 гб",
    },
    {
      id: 3,
      title: "Оперативная память",
      description: "5 гб",
    },
    {
      id: 4,
      title: "Оперативная память",
      description: "5 гб",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 mt-4 ml-4">
        <div className="col-span-4">
          <img
            // className="max-w-lg h-auto"
            alt="product_image.png"
            src={device.img}
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
        {description.map((info, index) => (
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

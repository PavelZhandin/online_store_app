import { Button, Dropdown, Modal, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Context } from "../..";
import {
  createDevice,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../../http/deviceApi";
import { Brand, Type } from "../../store/DeviceStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateDevice = observer(({ show, onHide }: Props) => {
  const { device } = useContext(Context);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [file, setFile] = useState<any>(null);
  const [info, setInfo] = useState<any[]>([]);

  useEffect(() => {
    if (device) {
      fetchTypes().then((tData: Type[]) => {
        device.types = tData;
      });
      fetchBrands().then((bData: Brand[]) => {
        device.brands = bData;
      });
    }
  }, []);

  const addInfo = () => {
    setInfo((prev) => [
      ...prev,
      { title: "", description: "", number: Date.now() },
    ]);
  };
  const removeInfo = (number: number) => {
    setInfo((prev) => prev.filter((item) => item.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
    console.log(e.target.files);
  };
  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device?.selectedBrand?.id);
    formData.append("typeId", device?.selectedType.id);
    formData.append("info", JSON.stringify(info));

    createDevice(formData).then((data) => onHide());
    console.log(info);
  };

  return (
    <div>
      <Modal show={show} onClose={onHide}>
        <Modal.Header>???????????????? ?????????? ??????</Modal.Header>
        <Modal.Body>
          <div className="sapce-y-6">
            <form onSubmit={() => {}}>
              <Dropdown
                label={device?.selectedType?.name || "???????????????? ??????"}
                dismissOnClick={true}
              >
                {device?.types.map((type: Type, index) => (
                  <Dropdown.Item
                    key={`${type}-${index}`}
                    onClick={() => (device.selectedType = type)}
                  >
                    {type.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>

              <Dropdown
                label={device?.selectedBrand?.name || "???????????????? ??????????"}
                dismissOnClick={true}
              >
                {device?.brands.map((brand: Brand, index) => (
                  <Dropdown.Item
                    key={`${brand}-${index}`}
                    onClick={() => (device.selectedBrand = brand)}
                  >
                    {brand.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>

              <TextInput
                className="mt-3"
                id="device_name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="?????????????? ???????????????? ????????????????????"
                required={true}
              />

              <TextInput
                className="mt-3"
                id="device_price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="?????????????? ?????????????????? ????????????????????"
                required={true}
              />

              <input
                className="mt-3"
                id="type_name"
                type="file"
                onChange={selectFile}
                placeholder="?????????????? ???????????????? ????????"
                required={true}
              />
            </form>
            <hr></hr>
            <Button type="button" onClick={addInfo}>
              ???????????????? ?????????? ????????????????
            </Button>
            {info.map((item, index) => (
              <div key={`${item}-${index}`} className="mt-2">
                <form className="flex gap-3">
                  <TextInput
                    value={item.title}
                    onChange={(e) =>
                      changeInfo("title", e.target.value, item.number)
                    }
                    placeholder="?????????????? ???????????????? ????????????????"
                  />
                  <TextInput
                    value={item.description}
                    onChange={(e) =>
                      changeInfo("description", e.target.value, item.number)
                    }
                    placeholder="?????????????? ???????????????? ????????????????"
                  />
                  <Button onClick={() => removeInfo(item.number)} type="button">
                    ??????????????
                  </Button>
                </form>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addDevice}>????????????????</Button>
          <Button color="gray" onClick={onHide}>
            ??????????????
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default CreateDevice;

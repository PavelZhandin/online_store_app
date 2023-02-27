import { Button, Dropdown, Label, Modal, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Form } from "react-router-dom";
import { Context } from "../..";
import { Brand, Type } from "../../store/DeviceStore";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateDevice = ({ show, onHide }: Props) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState<any[]>([]);

  const addInfo = () => {
    // setInfo([...info, { title: "", description: "", number: Date.now() }]);
    setInfo((prev) => [
      ...prev,
      { title: "", description: "", number: Date.now() },
    ]);
  };
  const removeInfo = (number: number) => {
    setInfo((prev) => prev.filter((item) => item.number !== number));
  };
  return (
    <div>
      <Modal show={show} onClose={onHide}>
        <Modal.Header>Добавить новый тип</Modal.Header>
        <Modal.Body>
          <div className="sapce-y-6">
            <form onSubmit={() => {}}>
              <Dropdown label="Выберите тип" dismissOnClick={false}>
                {device?.types.map((type: Type) => (
                  <Dropdown.Item>{type.name}</Dropdown.Item>
                ))}
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>

              <Dropdown label="Выберите бренд" dismissOnClick={false}>
                {device?.brands.map((type: Brand) => (
                  <Dropdown.Item>{type.name}</Dropdown.Item>
                ))}
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>

              <TextInput
                className="mt-3"
                id="type_name"
                type="text"
                placeholder="Введите название устройства"
                required={true}
              />

              <TextInput
                className="mt-3"
                id="type_name"
                type="number"
                placeholder="Введите стоимость устройства"
                required={true}
              />

              <input
                className="mt-3"
                id="type_name"
                type="file"
                placeholder="Введите название типа"
                required={true}
              />
              <hr></hr>
              <Button type="button" onClick={addInfo}>
                Добавить новое свойство
              </Button>
              {info.map((item, index) => (
                <div key={`${index}`} className="mt-2">
                  <form className="flex gap-3">
                    <TextInput placeholder="Введите название свойства" />
                    <TextInput placeholder="Введите описание свойства" />
                    <Button
                      onClick={() => removeInfo(item.number)}
                      type="button"
                    >
                      Удалить
                    </Button>
                  </form>
                </div>
              ))}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Добавить</Button>
          <Button color="gray" onClick={onHide}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateDevice;

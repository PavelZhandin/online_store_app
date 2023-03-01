import { Button, Dropdown, Label, Modal, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Context } from "../..";
import { createBrand } from "../../http/deviceApi";
import { useState } from "react";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateBrand = ({ show, onHide }: Props) => {
  const [value, setValue] = useState<string>("");

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <div>
      <Modal show={show} onClose={onHide}>
        <Modal.Header>Добавить новый бренд</Modal.Header>
        <Modal.Body>
          <div className="sapce-y-6">
            <form>
              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="brand_name"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  placeholder="Введите название бренда"
                  required={true}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addBrand}>Добавить</Button>
          <Button color="gray" onClick={onHide}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateBrand;

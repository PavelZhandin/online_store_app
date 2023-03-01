import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { createType } from "../../http/deviceApi";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateType = ({ show, onHide }: Props) => {
  const [value, setValue] = useState<string>("");

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <div>
      <Modal show={show} onClose={onHide}>
        <Modal.Header>Добавить новый тип</Modal.Header>
        <Modal.Body>
          <div className="sapce-y-6">
            <form>
              <div>
                <div className="mb-2 block"></div>
                <TextInput
                  id="type_name"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  placeholder="Введите название типа"
                  required={true}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={onHide}>
            Закрыть
          </Button>
          <Button onClick={addType}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateType;

import { Button, Label, Modal, TextInput } from "flowbite-react";
import React from "react";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateType = ({ show, onHide }: Props) => {
  return (
    <div>
      <Modal show={show} onClose={onHide}>
        <Modal.Header>Добавить новый тип</Modal.Header>
        <Modal.Body>
          <div className="sapce-y-6">
            <form>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="type_name" value="Your email" />
                </div>
                <TextInput
                  id="type_name"
                  type="text"
                  placeholder="Введите название типа"
                  required={true}
                />
              </div>
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

export default CreateType;

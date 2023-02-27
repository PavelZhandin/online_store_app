import { Button, Dropdown, Label, Modal, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Context } from "../..";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateBrand = ({ show, onHide }: Props) => {
  const { device } = useContext(Context);
  return (
    <div>
      <Modal show={show} onClose={onHide}>
        <Modal.Header>Добавить новый тип</Modal.Header>
        <Modal.Body>
          <div className="sapce-y-6">
            <form></form>
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

export default CreateBrand;

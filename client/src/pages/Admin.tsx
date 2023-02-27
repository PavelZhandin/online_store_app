import { Button } from "flowbite-react";
import React from "react";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = React.useState(false);
  const [typeVisible, setTypeVisible] = React.useState(false);
  const [deviceVisible, setDeviceVisible] = React.useState(false);
  return (
    <>
      <div className="center p-8 flex flex-col gap-2">
        <Button onClick={() => setTypeVisible(true)}>Добавить тип</Button>
        <Button onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
        <Button onClick={() => setDeviceVisible(true)}>
          Добавить устройство
        </Button>

        <CreateBrand
          show={brandVisible}
          onHide={() => {
            setBrandVisible(false);
          }}
        />
        <CreateType
          show={typeVisible}
          onHide={() => {
            setTypeVisible(false);
          }}
        />
        <CreateDevice
          show={deviceVisible}
          onHide={() => {
            setDeviceVisible(false);
          }}
        />
      </div>
    </>
  );
};

export default Admin;

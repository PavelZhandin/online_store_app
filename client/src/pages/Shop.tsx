import { observer } from "mobx-react-lite";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";
import { Brand, Type } from "../store/DeviceStore";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    if (device) {
      fetchTypes().then((tData: Type[]) => {
        device.types = tData;
      });
      fetchBrands().then((bData: Brand[]) => {
        device.brands = bData;
      });

      fetchDevices(null, null, 1, 3).then(
        (dData: { count: number; rows: Object[] }) => {
          device.devices = dData.rows;
          device.totalCount = dData.count;
        }
      );
    }
  }, []);

  useEffect(() => {
    fetchDevices(
      device?.selectedType,
      device?.selectedBrand,
      device?.page,
      3
    ).then((dData: { count: number; rows: Object[] }) => {
      if (device) {
        device.devices = dData.rows;
        device.totalCount = dData.count;
      }
    });
  }, [device?.page, device?.selectedType, device?.selectedBrand, device]);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-3">
        <div className="col-span-3">
          <TypeBar />
        </div>
        <div className="col-span-9">
          <BrandBar />
          <DeviceList />
          <Pages />
        </div>
      </div>
    </>
  );
});

export default Shop;

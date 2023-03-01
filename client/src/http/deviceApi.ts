import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";
import { Brand, Type } from "../store/DeviceStore";

export const createType = async (type: { name: string }) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");

  return data;
};

export const createBrand = async (brand: { name: string }) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");

  return data;
};
export const createDevice = async (device: any) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevices = async (
  typeId: number | null,
  brandId: number | null,
  page: number | undefined,
  limit: number | null = 5
) => {
  console.log(typeId, brandId, page, limit);
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });

  return data;
};
export const fetchOneDevice = async (id: number) => {
  const { data } = await $host.get("api/device/" + id);

  return data;
};

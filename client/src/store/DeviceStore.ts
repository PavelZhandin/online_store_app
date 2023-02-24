import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  private _types: Object[];
  private _devices: Object[];
  private _brands: Object[];

  constructor() {
    this._types = [
      {
        id: 1,
        name: "Холодильники",
      },
      {
        id: 2,
        name: "Смартфоны",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "Samsung",
      },
      {
        id: 2,
        name: "Apple",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "12_pro",
        price: 100000,
        rating: 0,
        img: "6cf34495-e6bd-47ee-96b7-ec2eda24b6ae.jpg",
        createdAt: "2023-02-05T13:15:17.558Z",
        updatedAt: "2023-02-05T13:15:17.558Z",
        basketId: null,
        typeId: 2,
        brandId: 1,
      },
      {
        id: 2,
        name: "Aspire 5 A515",
        price: 67000,
        rating: 0,
        img: "029a1648-5514-4484-89b7-81ad1351fb98.jpg",
        createdAt: "2023-02-11T08:08:25.805Z",
        updatedAt: "2023-02-11T08:08:25.805Z",
        basketId: null,
        typeId: 3,
        brandId: 2,
      },
    ];
    makeAutoObservable(this);
  }

  public get types(): Object[] {
    return this._types;
  }
  public set types(value: Object[]) {
    this._types = value;
  }

  public get devices(): Object[] {
    return this._devices;
  }
  public set devices(value: Object[]) {
    this._devices = value;
  }

  public get brands(): Object[] {
    return this._brands;
  }
  public set brands(value: Object[]) {
    this._brands = value;
  }
}

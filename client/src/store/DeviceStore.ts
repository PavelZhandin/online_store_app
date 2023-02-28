import { makeAutoObservable } from "mobx";

export type Type = {
  id: number;
  name: string;
};
export type Brand = {
  id: number;
  name: string;
};

export default class DeviceStore {
  private _types: Type[];
  private _devices: Object[];
  private _brands: Brand[];
  private _selectedType: any;
  private _selectedBrand: {};

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
      {
        id: 3,
        name: "Ноутбуки",
      },
      {
        id: 4,
        name: "Телевизоры",
      },
    ];
    this._brands = [
      {
        id: 5,
        name: "Samsung",
      },
      {
        id: 6,
        name: "Apple",
      },
    ];
    this._devices = [
      {
        id: 7,
        name: "12_pro",
        price: 100000,
        rating: 0,
        // img: "6cf34495-e6bd-47ee-96b7-ec2eda24b6ae.jpg",
        img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        createdAt: "2023-02-05T13:15:17.558Z",
        updatedAt: "2023-02-05T13:15:17.558Z",
        basketId: null,
        typeId: 2,
        brandId: 1,
      },
      {
        id: 8,
        name: "Aspire 5 A515",
        price: 67000,
        rating: 0,
        img: "https://flowbite.com/docs/images/blog/image-1.jpg",
        createdAt: "2023-02-11T08:08:25.805Z",
        updatedAt: "2023-02-11T08:08:25.805Z",
        basketId: null,
        typeId: 3,
        brandId: 2,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  public get types(): Type[] {
    return this._types;
  }
  public set types(value: Type[]) {
    this._types = value;
  }

  public get devices(): Object[] {
    return this._devices;
  }
  public set devices(value: Object[]) {
    this._devices = value;
  }

  public get brands(): Brand[] {
    return this._brands;
  }
  public set brands(value: Brand[]) {
    this._brands = value;
  }

  public get selectedType(): any {
    return this._selectedType;
  }
  public set selectedType(value: any) {
    this._selectedType = value;
  }

  public get selectedBrand(): {} {
    return this._selectedBrand;
  }
  public set selectedBrand(value: {}) {
    this._selectedBrand = value;
  }
}

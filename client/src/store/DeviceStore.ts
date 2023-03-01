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
  private _selectedType: Type | null;
  private _selectedBrand: Brand | null;
  private _limit: number;
  private _page: number;
  private _totalCount: number;

  public get page(): number {
    return this._page;
  }
  public set page(value: number) {
    this._page = value;
  }
  public get totalCount(): number {
    return this._totalCount;
  }
  public set totalCount(value: number) {
    this._totalCount = value;
  }
  public get limit(): number {
    return this._limit;
  }
  public set limit(value: number) {
    this._limit = value;
  }

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = null;
    this._selectedBrand = null;
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;

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
    this._page = 1;
    this._selectedType = value;
  }

  public get selectedBrand(): any {
    return this._selectedBrand;
  }
  public set selectedBrand(value: any) {
    this._page = 1;
    this._selectedBrand = value;
  }
}

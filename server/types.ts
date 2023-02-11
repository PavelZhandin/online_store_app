import { Request } from "express";

export interface FileRequest extends Request {
  files: any;
}

export interface AllDevicesBody extends Request {
  brandId: number;
  typeId: number;
  limit?: number;
  page?: number;
}

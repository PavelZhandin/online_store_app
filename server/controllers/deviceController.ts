import { NextFunction, Request, Response } from "express";
import { FileRequest } from "../types";
const { Device } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req: FileRequest, res: Response, next: NextFunction) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req: Request, res: Response) {}
  async getOne(req: Request, res: Response) {}
}

module.exports = new DeviceController();

const { Type } = require("../models/models");
const { ApiError } = require("../error/ApiError");
import { Request, Response } from "express";

class TypeController {
  public async create(req: Request, res: Response) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  public async getAll(req: Request, res: Response) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();

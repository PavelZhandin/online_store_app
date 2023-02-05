import { Request, Response, NextFunction } from "express";

const ApiError = require("../error/ApiError.ts");

class UserController {
  async registration(req: Request, res: Response) {}

  async login(req: Request, res: Response) {}

  async check(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("ID is not defined"));
    }
    res.json(id);
  }
}

module.exports = new UserController();

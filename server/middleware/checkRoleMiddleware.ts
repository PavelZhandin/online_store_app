import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res: Response, next: NextFunction) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1]; //Bearer asdfasfeq
      if (!token) {
        res.status(401).json({ message: "Не авторизован" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (decoded.role !== role) {
        return res.status(403).json({ message: "нет доступа" });
      }
      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).json({ message: "Не авторизован" });
    }
  };
};

import { NextFunction, Request, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const extractToken = (req: Request) => {
  const authorization = req.headers.authorization || "";
  return authorization.replace("Bearer ", "");
};

export default {
  verifyJWT(request: Request, response: Response, next: NextFunction) {
    const token = extractToken(request);

    if (!token)
      return response
        .status(401)
        .json({ auth: false, message: "No token provided." });
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      request.body.userId = decoded.payload.codigo;
      next();
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        return response
          .status(401)
          .json({ auth: false, message: "Terminou o tempo da sessão." });
      }
      return response
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });
    }
  },
};

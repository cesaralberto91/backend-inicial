import { Router } from "express";

import UsuarioController from "./controllers/UsuarioController";
import auth from "./middlewares/auth";

const routes = Router();
routes.get("/usuario", UsuarioController.index);
// routes.get("/usuario", auth.verifyJWT, UsuarioController.index);

export default routes;
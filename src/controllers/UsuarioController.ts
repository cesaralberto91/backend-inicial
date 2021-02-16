import { Request, Response } from "express";
import { getRepository } from "typeorm";
const jwt = require("jsonwebtoken");

import { Usuario } from "../models/Usuario";

export default {

  async index(request: Request, response: Response) {
    const usuarioRepository = getRepository(Usuario);
    const usuarios = await usuarioRepository.find();

    return response.status(200).json(usuarios);
  },

};

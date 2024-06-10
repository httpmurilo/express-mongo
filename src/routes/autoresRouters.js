import express from "express";
import AutoresController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutoresController.listarLivros);
routes.get("/autores/:id", AutoresController.listarLivroPorId);
routes.post("/autores", AutoresController.cadastrarLivro);
routes.put("/autores/:id", AutoresController.atualizarLivro);
routes.delete("/autores/:id", AutoresController.excluirLivro);


export default routes;
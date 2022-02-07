import { Router } from "express";
import { CreateAvaliacaoController } from "./src/controllers/CreateAvaliacaoController";

const routes = Router();

routes.post("/avaliacao", new CreateAvaliacaoController().handle);

export { routes };
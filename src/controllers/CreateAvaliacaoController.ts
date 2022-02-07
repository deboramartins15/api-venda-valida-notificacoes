import { Request, Response } from "express";
import { CreateAvaliacaoService } from "../services/CreateAvaliacaoService";

export class CreateAvaliacaoController {
  async handle(request: Request, response: Response) {
    const { cliente, vendedor, loja, chave_pedido, avaliacao } = request.body;

    const service = new CreateAvaliacaoService();
    const result = await service.execute({
      cliente,
      vendedor,
      loja,
      chave_pedido,
      avaliacao,
    });

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.json(result);
  }
}

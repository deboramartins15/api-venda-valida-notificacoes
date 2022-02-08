import { Request, Response } from "express";
import { vendaValidaRequest } from "../interfaces";
import { CreateAvaliacaoService } from "../services/CreateAvaliacaoService";

export class CreateAvaliacaoController {
  async handle(request: Request, response: Response) {
    const body: vendaValidaRequest = request.body;

    const service = new CreateAvaliacaoService();
    const result = await service.execute({
      cliente : body.customFields.buyerName,
      vendedor: body.customFields.sellerName,
      loja: body.customFields.storeName,
      chave_pedido: body.businessOrderId,
      avaliacao: body.questions[0].customerAnswer,
    });

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.json(result);
  }
}

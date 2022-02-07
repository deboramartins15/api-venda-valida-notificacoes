import { getRepository } from "typeorm";
import { Avaliacao } from "../entities/Avaliacao";

type AvaliacaoRequest = {
  cliente: string;
  vendedor: string;
  loja: string;
  chave_pedido: string;
  avaliacao: string;
};

export class CreateAvaliacaoService {
  async execute({
    cliente,
    vendedor,
    loja,
    chave_pedido,
    avaliacao,
  }: AvaliacaoRequest): Promise<Avaliacao | Error> {
    const repo = getRepository(Avaliacao);

    if (!cliente || !vendedor || !loja || !chave_pedido || !avaliacao)
      return new Error("Informações obrigatórias em branco");

    const avaliacaoVendedor = repo.create({
      cliente,
      vendedor,
      loja,
      chave_pedido,
      avaliacao,
    });
    await repo.save(avaliacaoVendedor);

    return avaliacaoVendedor;
  }
}

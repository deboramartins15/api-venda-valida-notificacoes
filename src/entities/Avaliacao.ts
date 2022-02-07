import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("avaliacao_vendedor")
export class Avaliacao {
  @PrimaryColumn()
  id: number;

  @Column()
  cliente: string;

  @Column()
  vendedor: string;

  @Column()
  loja: string;

  @Column()
  chave_pedido: string;

  @Column()
  avaliacao: string;

  @CreateDateColumn()
  created_at: Date;
}

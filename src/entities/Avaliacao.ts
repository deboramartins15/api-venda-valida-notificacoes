import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("avaliacao_vendedor")
export class Avaliacao {
  @PrimaryGeneratedColumn("increment")
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

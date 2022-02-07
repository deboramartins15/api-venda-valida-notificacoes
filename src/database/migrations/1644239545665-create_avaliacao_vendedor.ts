import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAvaliacaoVendedor1644239545665
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "avaliacao_vendedor",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "cliente",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "vendedor",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "loja",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "chave_pedido",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "avaliacao",
            type: "varchar",
            isNullable: false,
          },
          {
              name: "created_at",
              type: "timestamp",
              default: "now()"
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("avaliacao_vendedor");
  }
}

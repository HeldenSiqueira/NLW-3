import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602547923810 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true, //não pode ser negativo
          isPrimary: true, // minha chave identificadora
          isGenerated: true,//gerada autoimaticamente
          generationStrategy: 'increment' //gerada automaticamente em uma logica incremental 1,2,3
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10, // nuemro depois da virgula
          precision: 2 // numero antes da virgula
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about', 
          type: 'text'
        },
        {
          name: 'instructions', // intruções para visita
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name: 'open_on_weekends', // se é aberto final de semana ou não
          type: 'boolean',
          default: false
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
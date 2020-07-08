import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Orders1594209777358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                  name: "customer_id",
                  type: "uuid"
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()"
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()"
                },
            ],
            foreignKeys: [
              {
                referencedTableName: 'customers',
                referencedColumnNames: ['id'],
                columnNames: ['customer_id'],
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
              }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('orders');
    }

}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ordersProducts1594210172745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'orders_products',
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                  name: "product_id",
                  type: "uuid"
                },
                {
                  name: "order_id",
                  type: "uuid"
                },
                {
                  name: "price",
                  type: "decimal",
                  precision: 5,
                  scale: 2
                },
                {
                  name: "quantity",
                  type: "int"
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
                    name: 'set_product_to_orders_products',
                    referencedTableName: 'products',
                    referencedColumnNames: ['id'],
                    columnNames: ['product_id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'set_order_to_orders_products',
                    referencedTableName: 'orders',
                    referencedColumnNames: ['id'],
                    columnNames: ['order_id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'CASCADE',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('orders_products');
    }

}

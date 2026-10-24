import { Pool } from "pg";
import { Product } from "../entities/product";
import { IProductRepository } from "../interfaces/IProductRepository";
import { pgClient } from "../dbConnection";
import { injectable } from "inversify";


@injectable()
export class ProductRepository implements IProductRepository {
    private client: Pool
    constructor() {
        this.client = pgClient();
    }

    async create(data: Product): Promise<Product> {
        const product = await this.client.query(
            `INSERT INTO products (name,description,price,stock) VALUES ($1,$2,$3,$4) RETURNING *`,
            [data.name, data.description, data.price, data.stock]
        );
        console.log(`Product created! ${product.rows[0]}`);
        return product.rows[0];
    }
    async update(id: number, stock: number): Promise<Product> {
        const product = await this.client.query(
          `UPDATE products SET stock=$1 WHERE id=$2 RETURNING *`,
          [stock, id]
        );
        return product.rows[0];
    }
    async find(limit: number, offset: number): Promise<Product[]> {
        const products = await this.client.query(`SELECT * FROM products OFFSET $1 LIMIT $2`,[offset,limit]);
        
        return products.rows;
    }
}
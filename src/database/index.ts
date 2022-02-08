import { createConnection } from "typeorm";
import "dotenv/config";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const conn: MysqlConnectionOptions = {
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: 3306,
  entities: ["src/entities/*.ts", "./build/src/entities/*.js"],
};

createConnection(conn);

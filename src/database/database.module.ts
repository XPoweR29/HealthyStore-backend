import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      bigNumberStrings: false,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
})
export class DatabaseModule {}

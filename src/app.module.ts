import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [DatabaseModule, ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

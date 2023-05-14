import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopItemEntity } from './entities/shop-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShopItemEntity])
  ],
  controllers: [ShopController],
  providers: [ShopService]
})
export class ShopModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Patch } from '@nestjs/common/decorators';
import { StatusReposnse } from 'src/types/shop-controller-response';
import { AddProductDto } from './dto/add-product.dto';
import { ShopItemEntity } from './entities/shop-item.entity';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/')
  getProductList(): Promise<ShopItemEntity[]> {
    return this.shopService.getProductList();
  }

  @Get('/:id')
  getOneProduct(@Param('id') id: string) {
    return this.shopService.getOneProduct(id);
  }

  @Post('/') 
  addNewProduct(@Body() product: AddProductDto): Promise<ShopItemEntity> {
    return this.shopService.addNewProduct(product);
  }

  @Patch('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() updatedProduct: AddProductDto,
  ): Promise<ShopItemEntity> {
    return this.shopService.updateProduct(id, updatedProduct);
  }

  @Delete('/:id')
  removeProduct(@Param('id') id: string): Promise<StatusReposnse> {
    return this.shopService.removeProduct(id);
  }
}

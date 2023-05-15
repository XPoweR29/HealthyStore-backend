import { Injectable } from '@nestjs/common';
import { StatusReposnse } from 'src/types/shop-controller-response';
import { AddProductDto } from './dto/add-product.dto';
import { ShopItemEntity } from './entities/shop-item.entity';

@Injectable()
export class ShopService {

    async getProductList(): Promise<ShopItemEntity[]> {
       return await ShopItemEntity.find();
    }   

    async getOneProduct(id: string): Promise<ShopItemEntity> {
        return await ShopItemEntity.findOne({where: {id}});
    }

    async addNewProduct(product: AddProductDto): Promise<ShopItemEntity> {
        //FIXME: lepiej to zorbić w oparciu o QueryBuilder
        const newProduct = new ShopItemEntity();
        newProduct.name = product.name;
        newProduct.category = product.category;
        newProduct.unit = product.unit;
        newProduct.description = product.description;
        newProduct.price = product.price;

        return await newProduct.save();
    }

    async updateProduct(id: string, updatedProduct: AddProductDto): Promise<ShopItemEntity> {
        const shopItem = await ShopItemEntity.findOne({where: {id}});

        Object.assign(shopItem, updatedProduct);
        return await shopItem.save();
    } 

    async removeProduct(id: string): Promise<StatusReposnse> { 
        const shopItem = await ShopItemEntity.findOne({where: {id}});

        if(!shopItem){
            return {isSuccess: false, message: 'There is no such product'}
        }

        shopItem.remove();
        return {isSuccess: true}
    }

}

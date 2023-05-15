import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ShopItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column() //tutaj będzie oneToMany i relacja z tabela z kategoriami 
  category: string;

  @Column({
    length: 10,
  })
  unit: string;

  @Column({
    type: 'longtext',
  })
  description: string;

  @Column({
    type: 'float',
    precision: 6,
    scale: 2, 
  })
  price: number;
}
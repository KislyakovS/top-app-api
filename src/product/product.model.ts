import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';

class ProductSpecification {
  @prop()
  name: string;

  @prop()
  value: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductModel extends Base { }
export class ProductModel extends TimeStamps {
  @IsString()
  @prop()
  image: string;

  @IsString()
  @prop()
  title: string;

  @IsNumber()
  @prop()
  price: number;

  @IsNumber()
  @prop()
  oldNumber: number;

  @IsNumber()
  @prop()
  credit: number;

  @IsNumber()
  @prop()
  calculatedRating: number;

  @IsString()
  @prop()
  description: string;

  @IsString()
  @prop()
  advantages: string;

  @IsString()
  @prop()
  disAdvantages: string;

  @IsArray()
  @Type(() => String)
  @prop({ type: () => [String] })
  categories: string[];

  @IsArray()
  @Type(() => String)
  @prop({ type: () => [String] })
  tags: string[];

  @IsArray()
  @ValidateNested()
  @Type(() => ProductSpecification)
  @prop({ type: () => [ProductSpecification], _id: false })
  specifications: ProductSpecification[];
}

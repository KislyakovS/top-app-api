import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

class ProductSpecification {
  @prop()
  name: string;

  @prop()
  value: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
  @prop()
  image: string;

  @prop()
  title: string;

  @prop()
  price: number;

  @prop()
  oldNumber: number;

  @prop()
  credit: number;

  @prop()
  calculatedRating: number;

  @prop()
  description: string;

  @prop()
  advantages: string;

  @prop()
  disAdvantages: string;

  @prop({ type: () => [String] })
  categories: string[];

  @prop({ type: () => [String] })
  tags: string[];

  @prop({ type: () => [ProductSpecification], _id: false })
  specifications: ProductSpecification[];
}

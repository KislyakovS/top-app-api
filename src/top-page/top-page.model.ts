import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsString, ValidateNested } from 'class-validator';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TopPageModel extends Base { }
export class TopPageModel extends TimeStamps {
  @IsEnum(TopLevelCategory)
  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @IsString()
  @prop()
  secondCategory: string;

  @IsString()
  @prop({ unique: true })
  alias: string;

  @IsString()
  @prop()
  title: string;

  @IsString()
  @prop()
  category: string;

  @ValidateNested()
  @Type(() => HhData)
  @prop({ type: () => HhData })
  hh?: HhData;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TopPageAdvantage)
  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];

  @IsString()
  @prop()
  seoText: string;

  @IsString()
  @prop()
  tagsTitle: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => String)
  @prop({ type: () => [String] })
  tags: string[];
}

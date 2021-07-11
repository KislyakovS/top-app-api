import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) { }

  @UsePipes(new ValidationPipe())
  @Get(':id')
  async get(@Param('id') id: string) { }

  @UsePipes(new ValidationPipe())
  @Delete(':id')
  async delete(@Param('id') id: string) { }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: ProductModel) { }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) { }
}

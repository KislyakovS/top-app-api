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
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) { }

  @UsePipes(new ValidationPipe())
  @Get(':id')
  async get(@Param('id') id: string) { }

  @UsePipes(new ValidationPipe())
  @Delete(':id')
  async delete(@Param('id') id: string) { }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: TopPageModel) { }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) { }
}

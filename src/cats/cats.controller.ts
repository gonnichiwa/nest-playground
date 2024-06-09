import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Cat, ListAllEntities } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: Cat) {
    return `This action adds a new cat ${createCatDto.age}, ${createCatDto.name}, ${createCatDto.breed}`;
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: Cat) {
    return `This action updates a #${id}, ${updateCatDto.age} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

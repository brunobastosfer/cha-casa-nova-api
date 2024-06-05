// src/products/products.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/createCategoryDTO';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() category: CreateCategoryDTO) {
    return await this.categoryService.createCategory(category);
  }

  @Get()
  async findAllProducts() {
    return 'Olá mundo';
  }
}

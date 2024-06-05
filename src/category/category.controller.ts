// src/products/products.controller.ts
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './products.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('products')
export class ProductsController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() category: any) {
    return this.productsService.createProduct({
      name,
      price: parseFloat(price),
      description,
      photo,
    });
  }

  @Get()
  async findAllProducts() {
    return 'Olá mundo';
  }
}

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
import { CreateProductDTO } from './dto/createProductDTO';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async create(@Body() body: CreateProductDTO, @UploadedFile() file: any) {
    const { name, price, description, categoryId, quantity } = body;
    const photo = file.filename;

    return this.productsService.createProduct({
      name,
      price: parseFloat(String(price)),
      description,
      photo,
      categoryId,
      quantity: parseFloat(String(quantity)),
    });
  }

  @Get()
  async findAllProducts() {
    return 'Olá mundo';
  }
}

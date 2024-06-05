import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/repository/products.repository';
import { ProductService } from './products.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductService, PrismaService, ProductRepository],
})
export class ProductsModule {}

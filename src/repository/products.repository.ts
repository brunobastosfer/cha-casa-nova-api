import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDTO } from 'src/products/dto/createProductDTO';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: CreateProductDTO): Promise<Product> {
    return await this.prisma.product.create({ data });
  }
}

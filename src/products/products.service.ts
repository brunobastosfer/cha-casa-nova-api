import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repository/products.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async createProduct(data: any) {
    return this.productRepository.createProduct(data);
  }
}

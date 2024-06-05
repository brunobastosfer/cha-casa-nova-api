import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repository/products.repository';

@Injectable()
export class CategoryService {
  constructor(private productRepository: CategoryRepository) {}

  async createProduct(data: any) {
    return this.productRepository.createProduct(data);
  }
}

import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repository/products.repository';
import { CreateProductDTO } from './dto/createProductDTO';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async createProduct(data: CreateProductDTO) {
    return await this.productRepository.createProduct(data);
  }
}

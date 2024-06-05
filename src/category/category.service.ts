import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async createProduct(data: any) {
    return this.categoryRepository.createCategory(data);
  }
}

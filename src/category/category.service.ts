import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/repository/category.repository';
import { CreateCategoryDTO } from './dto/createCategoryDTO';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async createCategory(data: CreateCategoryDTO) {
    return await this.categoryRepository.createCategory(data);
  }
}

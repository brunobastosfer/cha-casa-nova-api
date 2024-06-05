import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCategoryDTO } from 'src/category/dto/createCategoryDTO';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(data: CreateCategoryDTO): Promise<Category> {
    return await this.prisma.category.create({ data });
  }
}

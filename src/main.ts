import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Produtos Chá de Casa Nova')
    .setDescription('Documentação da API')
    .setVersion('1.0')
    .addTag('nestjs-prisma')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();

  console.log('servidor rodando na porta', process.env.PORT || 8080);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();

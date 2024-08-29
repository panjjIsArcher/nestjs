import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './exceptionFilter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 自定义全局过滤器
  app.useGlobalFilters(new CustomExceptionFilter());
  // swagger
  const docuConfig = new DocumentBuilder()
    .setTitle('nestjs example')
    .setDescription('this is api document')
    .setVersion('1.0.0')
    .addTag('nestjs')
    .build();

  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(app, docuConfig),
  );

  await app.listen(3000);
}

bootstrap();

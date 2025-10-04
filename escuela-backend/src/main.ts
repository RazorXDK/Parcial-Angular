import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: '*', // 👈 permite cualquier frontend (simple para desarrollo)
  });

  await app.listen(3000);
}
bootstrap();

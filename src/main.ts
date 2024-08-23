import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    logger: ['error', 'warn'],
  });
  app.enableCors({
    origin: 'http://localhost:9000',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();

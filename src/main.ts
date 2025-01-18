import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('HealthTech API')
    .setDescription('API documentation for HealthTech platform')
    .setVersion('1.0')
    .addBearerAuth()
    .setContact(
      'HealthTech Support',
      'https://healthtech.example.com/support',
      'support@healthtech.example.com'
    )
    .setTermsOfService('https://healthtech.example.com/terms')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();

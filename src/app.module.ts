import { Module } from '@nestjs/common';
import { CepController } from './controllers/CepController';
import { CepServiceImpl } from './services/impl/CepServiceImpl';

@Module({
  imports: [],
  controllers: [CepController],
  providers: [CepServiceImpl],
})
export class AppModule {}

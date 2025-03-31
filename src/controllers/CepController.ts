import { Controller, Post, Body } from '@nestjs/common';
import { CepServiceImpl } from '../services/impl/CepServiceImpl';
import { CepRequestDto } from '../dtos/requests/CepRequestDTO';
import { CepResponseDto } from '../dtos/responses/CepResponseDTO';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepServiceImpl) {}

  @Post()
  async getCep(@Body() request: CepRequestDto): Promise<CepResponseDto> {
    return this.cepService.getCep(request.cep);
  }
}

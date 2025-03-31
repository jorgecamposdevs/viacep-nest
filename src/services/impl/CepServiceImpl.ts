import { Injectable, Logger } from '@nestjs/common';
import { CepService } from '../CepService';
import { CepResponseDto } from '../../dtos/responses/CepResponseDTO';
import axios from 'axios';

@Injectable()
export class CepServiceImpl implements CepService {
  private readonly logger = new Logger(CepServiceImpl.name);
  async getCep(cep: string): Promise<CepResponseDto> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    this.logger.log(`Iniciando busca do CEP: ${cep} - URL: ${url}`);
    const { data } = await axios.get<CepResponseDto>(url);
    return data;
  }
}

import { Injectable } from '@nestjs/common';
import { CepService } from '../CepService';
import { CepResponseDto } from '../../dtos/responses/CepResponseDTO';
import axios from 'axios';

@Injectable()
export class CepServiceImpl implements CepService {
  async getCep(cep: string): Promise<CepResponseDto> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const { data } = await axios.get<CepResponseDto>(url);
    return data;
  }
}

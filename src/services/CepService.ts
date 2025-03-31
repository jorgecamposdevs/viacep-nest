import { CepResponseDto } from '../dtos/responses/CepResponseDTO';

export interface CepService {
  getCep(cep: string): Promise<CepResponseDto>;
}

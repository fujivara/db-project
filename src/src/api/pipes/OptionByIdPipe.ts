import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Option } from '../../db/schemas/Option';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OptionByIdPipe implements PipeTransform<string, Promise<string>> {
  constructor (
    @InjectRepository(Option)
    private optionRepository: Repository<Option>
  ) {}

  async transform (optionId: string) {
    const option = await this.optionRepository.findOneBy({ id: optionId });

    if (!option) {
      throw new BadRequestException('Option with such id not found');
    }

    return optionId;
  }
}

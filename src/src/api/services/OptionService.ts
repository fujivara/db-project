import { Option } from '../../db/schemas/Option';
import { Repository } from 'typeorm';
import { CreateOptionDto } from '../dtos/CreateOptionDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question, QuestionType } from '../../db/schemas/Question';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class OptionService {
  constructor (
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>
  ) {}

  async create (data: CreateOptionDto): Promise<Option> {
    const question = await this.questionRepository.findOneBy({ id: data.questionId });

    if (!question) {
      throw new BadRequestException('Question with such id not found');
    }

    if (question.type !== QuestionType.OPTION) {
      throw new BadRequestException('Question type does not match required type');
    }

    const option = this.optionRepository.create({
      ...data,
      question,
    });

    return this.optionRepository.save(option);
  }

  async delete (optionId: string): Promise<Option> {
    const option = await this.optionRepository.findOneBy({ id: optionId });
    return this.optionRepository.remove(option);
  }
}

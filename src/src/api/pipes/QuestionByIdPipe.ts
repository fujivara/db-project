import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Question } from '../../db/schemas/Question';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionByIdPipe implements PipeTransform<string, Promise<string>>  {
  constructor (
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async transform (questionId: string): Promise<string> {
    const question = await this.questionRepository.findOneBy({ id: questionId });

    if (!question) {
      throw new BadRequestException('Question with such id does not exist');
    }

    return questionId;
  }
}

import { Repository } from 'typeorm';
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Answer } from '../../db/schemas/Answer';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnswerByIdPipe implements PipeTransform {
  constructor (
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>
  ) {}

  async transform (answerId: string): Promise<string> {
    const answer = await this.answerRepository.findOneBy({ id: answerId });

    if (!answer) {
      throw new BadRequestException('Answer with such id not found');
    }

    return answerId;
  }
}

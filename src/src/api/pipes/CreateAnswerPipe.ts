import { BadRequestException, ConflictException, Injectable, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../db/schemas/User';
import { Question, QuestionType } from '../../db/schemas/Question';
import { CreateAnswerDto } from '../dtos/CreateAnswerDto';
import { Answer } from '../../db/schemas/Answer';
import { Option } from '../../db/schemas/Option';

@Injectable()
export class CreateAnswerPipe implements PipeTransform<CreateAnswerDto, Promise<CreateAnswerDto>> {
  constructor (
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(Option)
    private optionRepository:  Repository<Option>
  ) {
  }

  async transform (data: CreateAnswerDto) {
    const question = await this.questionRepository.findOneBy({ id: data.questionId });

    if (!question) {
      throw new BadRequestException('Question with such id not found');
    }

    const user = await this.userRepository.findOneBy({ id: data.userId });

    if (!user) {
      throw new BadRequestException('User with such id not found');
    }

    const answer = await this.answerRepository.findOneBy({ question: question, user: user });

    if (answer) {
      throw new ConflictException('User already made an answer');
    }

    if (question.type === QuestionType.OPTION && !data.optionAnswer ||
      question.type === QuestionType.TEXT && !data.textAnswer
    ) {
      throw new BadRequestException('For this question type respectful answer should be provided');
    }

    if (data.textAnswer && data.optionAnswer) {
      throw new BadRequestException('Both answer types cannot be provided');
    }

    if (question.type === QuestionType.OPTION) {
      const option = await this.optionRepository.findOneBy({ id: data.optionAnswer.optionId, question });

      if (!option) {
        throw new BadRequestException('Option with such id not found');
      }
    }

    return data;
  }
}

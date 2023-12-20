import { BadRequestException, Injectable } from '@nestjs/common';
import { Answer } from '../../db/schemas/Answer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from '../dtos/CreateAnswerDto';
import { Question, QuestionType } from '../../db/schemas/Question';
import { User } from '../../db/schemas/User';
import { OptionAnswer } from '../../db/schemas/OptionAnswer';
import { TextAnswer } from '../../db/schemas/TextAnswer';
import { Option } from '../../db/schemas/Option';
import { UpdateAnswerDto } from '../dtos/UpdateAnswerDto';
import { text } from 'express';

@Injectable()
export class AnswerService {
  constructor (
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(OptionAnswer)
    private optionAnswerRepository: Repository<OptionAnswer>,
    @InjectRepository(TextAnswer)
    private textAnswerRepository: Repository<TextAnswer>,
    @InjectRepository(Option)
    private optionRepository:  Repository<Option>
  ) {}

  async create (data: CreateAnswerDto): Promise<Answer> {
    const question = await this.questionRepository.findOneBy({ id: data.questionId });

    const user = await this.userRepository.findOneBy({ id: data.userId });

    const answer = this.answerRepository.create({
      user,
      question,
    });

    const { id } = await this.answerRepository.save(answer);

    if (question.type === QuestionType.OPTION) {
      const option = await this.optionRepository.findOneBy({ id: data.optionAnswer.optionId, question });

      if (!option) {
        throw new BadRequestException('Option with such id not found');
      }

      const optionAnswer = this.optionAnswerRepository.create({
        option,
        answer,
      });

      await this.optionAnswerRepository.save(optionAnswer);

    } else {
      const textAnswer = this.textAnswerRepository.create({
        text: data.textAnswer.text,
        answer,
      });

      await this.textAnswerRepository.save(textAnswer);
    }

    return this.getById(id);
  }

  async getById (answerId: string) {
    const answer = await this.answerRepository.findOne({ where: { id: answerId },
      relations: ['user', 'question']   });
    if (answer.question.type === QuestionType.OPTION) {
      const optionAnswer = await this.optionAnswerRepository.findOne({ where: { answer },
        relations: ['option'] });
      answer.optionAnswers = [optionAnswer];
    } else {
      const textAnswer = await this.textAnswerRepository.findOne({ where: { answer } });
      answer.textAnswers = [textAnswer];
    }
    return answer;
  }

  async update (answerId: string, data: UpdateAnswerDto) {
    const answer = await this.getById(answerId);

    const questionType = answer.question.type;

    if (!data.textAnswer && !data.optionAnswer) {
      throw new BadRequestException('For this question type respectful answer should be provided');
    }

    if (questionType === QuestionType.OPTION && !data.optionAnswer ||
      questionType === QuestionType.TEXT && !data.textAnswer
    ) {
      throw new BadRequestException('For this question type respectful answer should be provided');
    }

    if (questionType === QuestionType.OPTION) {
      const option = await this.optionRepository.findOneBy({
        id: data.optionAnswer.optionId,
      });

      if (!option) {
        throw new BadRequestException('Option with such id not found');
      }

      await this.optionAnswerRepository.createQueryBuilder()
        .update(OptionAnswer)
        .set({ option })
        .where('id = :id', { id: answer.optionAnswers[0].id })
        .execute();

    } else {

      await this.textAnswerRepository.createQueryBuilder()
        .update(TextAnswer)
        .set({ text: data.textAnswer.text })
        .where('id = :id', { id: answer.textAnswers[0].id })
        .execute();
    }

    return this.getById(answerId);
  }
}

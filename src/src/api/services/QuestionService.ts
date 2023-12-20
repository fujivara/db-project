import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/CreateQuestionDto';
import { Repository } from 'typeorm';
import { Question } from '../../db/schemas/Question';
import { Survey } from '../../db/schemas/Survey';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from '../../db/schemas/Answer';
import { AnswerService } from './AnswerService';

@Injectable()
export class QuestionService {
  constructor (
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    private answerService: AnswerService
  ) {}

  async create (data: CreateQuestionDto): Promise<Question> {
    const survey = await this.surveyRepository.findOneBy({ id: data.surveyId });
    const question = this.questionRepository.create({
      text: data.text,
      type: data.type,
      survey,
    });
    return this.questionRepository.save(question);
  }

  async getById (questionId: string): Promise<Question> {
    return this.questionRepository.findOneBy({ id: questionId });
  }

  async delete (questionId: string): Promise<Question> {
    const question = await this.getById(questionId);
    return this.questionRepository.remove(question);
  }

  async getUserAnswer (questionId: string, userId: string) {
    const answer = await this.answerRepository.createQueryBuilder('answer')
      .where('answer.userId = :userId AND answer.questionId = :questionId', {
        userId,
        questionId,
      })
      .getOne();

    if (!answer) {
      throw new BadRequestException('User hasn\'t answered do this question yet');
    }

    return this.answerService.getById(answer.id);
  }

}

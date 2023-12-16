import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/CreateQuestionDto';
import { Repository } from 'typeorm';
import { Question } from '../../db/schemas/Question';
import { Survey } from '../../db/schemas/Survey';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionService {
  constructor (
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>
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

}

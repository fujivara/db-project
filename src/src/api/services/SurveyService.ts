import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from '../../db/schemas/Survey';
import { CreateSurveyDto } from '../dtos/CreateSurveyDto';
import { User } from '../../db/schemas/User';

@Injectable()
export class SurveyService {
  constructor (
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create (data: CreateSurveyDto) {
    const user = await this.userRepository.findOneBy({ id: data.userId });

    if (!user) {
      throw new BadRequestException('User with such id was not found');
    }

    const survey = this.surveyRepository.create({
      ...data,
      user,
    });

    return this.surveyRepository.save(survey);
  }

  async getById (surveyId: string) {
    return this.surveyRepository.findOneBy({ id: surveyId });
  }

  async delete (surveyId: string) {
    const survey = await this.surveyRepository.findOneBy({ id: surveyId });
    return this.surveyRepository.remove(survey);
  }
}
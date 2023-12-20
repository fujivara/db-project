import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from '../../db/schemas/Survey';

@Injectable()
export class SurveyByIdPipe implements PipeTransform {
  constructor (
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>
  ) {}

  async transform (surveyId: string) {
    const survey = await this.surveyRepository.findOneBy({ id: surveyId });

    if (!survey) {
      throw new BadRequestException('Survey with such id was not found');
    }

    return surveyId;
  }

}

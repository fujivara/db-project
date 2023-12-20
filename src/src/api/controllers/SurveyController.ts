import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SurveyService } from '../services/SurveyService';
import { CreateSurveyDto } from '../dtos/CreateSurveyDto';
import { SurveyByIdPipe } from '../pipes/SurveyByIdPipe';
import { Survey } from '../../db/schemas/Survey';

@Controller('/surveys')
export class SurveyController {
  constructor (
    private surveyService: SurveyService
  ) {}

  @Post()
  async create (@Body() body: CreateSurveyDto): Promise<Survey> {
    return this.surveyService.create(body);
  }

  @Get('/:surveyId')
  async getById (@Param('surveyId', SurveyByIdPipe) surveyId: string): Promise<Survey> {
    return this.surveyService.getById(surveyId);
  }

  @Delete('/:surveyId')
  async delete (@Param('surveyId', SurveyByIdPipe) surveyId: string): Promise<Survey> {
    return this.surveyService.delete(surveyId);
  }

}
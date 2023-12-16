import { Module } from '@nestjs/common';
import { SurveyRepository } from '../db/repositories/SurveyRepository';

@Module({
  providers: [SurveyRepository],
  exports: [SurveyRepository],
})

export class SurveyModule {}

import { Module } from '@nestjs/common';
import { SurveyController } from '../api/controllers/SurveyController';
import { SurveyService } from '../api/services/SurveyService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from '../db/schemas/Survey';
import { Repository } from 'typeorm';
import { User } from '../db/schemas/User';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, User])],
  controllers: [SurveyController],
  providers: [SurveyService, Repository],
})
export class SurveyModule {}

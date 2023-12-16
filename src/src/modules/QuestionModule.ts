import { Module } from '@nestjs/common';
import { QuestionService } from '../api/services/QuestionService';
import { QuestionController } from '../api/controllers/QuestionController';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../db/schemas/Question';
import { Survey } from '../db/schemas/Survey';
import { Answer } from '../db/schemas/Answer';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Survey, Answer])],
  controllers: [QuestionController],
  providers: [QuestionService, Repository],
})

export class QuestionModule {}

import { Module } from '@nestjs/common';
import { AnswerController } from '../api/controllers/AnswerController';
import { AnswerService } from '../api/services/AnswerService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextAnswer } from '../db/schemas/TextAnswer';
import { OptionAnswer } from '../db/schemas/OptionAnswer';
import { Question } from '../db/schemas/Question';
import { Answer } from '../db/schemas/Answer';
import { User } from '../db/schemas/User';
import { Option } from '../db/schemas/Option';


@Module({
  imports: [TypeOrmModule.forFeature([Answer, Question, User, TextAnswer, OptionAnswer, Option])],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}

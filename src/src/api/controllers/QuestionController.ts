import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from '../services/QuestionService';
import { CreateQuestionDto } from '../dtos/CreateQuestionDto';
import { QuestionByIdPipe } from '../pipes/QuestionByIdPipe';
import { Question } from '../../db/schemas/Question';


@Controller('/questions')
export class QuestionController {
  constructor (private questionService: QuestionService) {}

  @Post()
  async create (@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
    return this.questionService.create(createQuestionDto);
  }

  @Get('/:questionId')
  async getById (@Param('questionId', QuestionByIdPipe) questionId: string): Promise<Question> {
    return this.questionService.getById(questionId);
  }

  @Delete('/:questionId')
  async delete (@Param('questionId', QuestionByIdPipe) questionId: string) {
    return this.questionService.delete(questionId);
  }
}

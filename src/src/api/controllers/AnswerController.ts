import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AnswerService } from '../services/AnswerService';
import { CreateAnswerDto } from '../dtos/CreateAnswerDto';
import { AnswerByIdPipe } from '../pipes/AnswerByIdPipe';
import { CreateAnswerPipe } from '../pipes/CreateAnswerPipe';
import { UpdateAnswerDto } from '../dtos/UpdateAnswerDto';

@Controller('/answers')
export class AnswerController {
  constructor (private answerService: AnswerService) {}

  @Post()
  async create (@Body(CreateAnswerPipe) data: CreateAnswerDto) {
    return this.answerService.create(data);
  }

  @Get('/:answerId')
  async getById (@Param('answerId', AnswerByIdPipe) answerId: string) {
    return this.answerService.getById(answerId);
  }

  @Patch('/:answerId')
  async update (
    @Param('answerId', AnswerByIdPipe) answerId: string,
    @Body() data: UpdateAnswerDto
  ) {
    return this.answerService.update(answerId, data);
  }
}

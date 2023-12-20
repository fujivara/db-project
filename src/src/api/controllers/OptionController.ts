import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { OptionService } from '../services/OptionService';
import { CreateOptionDto } from '../dtos/CreateOptionDto';
import { OptionByIdPipe } from '../pipes/OptionByIdPipe';

@Controller('/options')
export class OptionController {
  constructor (private optionService: OptionService) {}

  @Post()
  async create (@Body() data: CreateOptionDto) {
    return this.optionService.create(data);
  }

  @Delete('/:optionId')
  async delete (@Param('optionId', OptionByIdPipe) optionId: string) {
    return this.optionService.delete(optionId);
  }
}

import { OptionAnswerDto, TextAnswerDto } from './CreateAnswerDto';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateAnswerDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => TextAnswerDto)
    textAnswer: TextAnswerDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => OptionAnswerDto)
    optionAnswer: OptionAnswerDto;
}

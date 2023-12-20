import { IsNotEmpty, IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class TextAnswerDto {
  @IsNotEmpty()
    text: string;
}

export class OptionAnswerDto {
  @IsNotEmpty()
  @IsUUID()
    optionId: string;
}


export class CreateAnswerDto {
  @IsNotEmpty()
  @IsUUID()
    userId: string;
  @IsNotEmpty()
  @IsUUID()
    questionId: string;
  @IsOptional()
  @ValidateNested()
  @Type(() => TextAnswerDto)
    textAnswer: TextAnswerDto;
  @IsOptional()
  @ValidateNested()
  @Type(() => OptionAnswerDto)
    optionAnswer: OptionAnswerDto;
}

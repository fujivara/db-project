import { QuestionType } from '../../db/schemas/Question';
import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
    text: string;
  @IsEnum(QuestionType, { message: 'Wrong question type' })
    type: QuestionType;
  @IsNotEmpty()
  @IsUUID()
    surveyId: string;
}

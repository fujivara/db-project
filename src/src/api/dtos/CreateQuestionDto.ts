import { QuestionType } from '../../db/schemas/Question';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
    text: string;
  @IsEnum(QuestionType, { message: 'Wrong question type' })
    type: QuestionType;
  surveyId: string;
}

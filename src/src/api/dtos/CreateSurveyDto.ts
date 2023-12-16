import { SurveyState } from '../../db/schemas/Survey';
import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateSurveyDto {
  @IsNotEmpty()
    title: string;
  @IsNotEmpty()
    description: string;
  @IsOptional()
  @IsEnum(SurveyState, { message: 'Wrong survey state provided' })
    state: SurveyState;
  @IsNotEmpty()
  @IsUUID()
    userId: string;

}

import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
    text: string;
  @IsNotEmpty()
  @IsUUID()
    questionId: string;
}


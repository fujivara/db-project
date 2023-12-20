import { Module } from '@nestjs/common';
import { QuestionModule } from './modules/QuestionModule';
import { DatabaseModule } from './modules/DatabaseModule';
import { SurveyModule } from './modules/SurveyModule';
import { OptionModule } from './modules/OptionModule';
import { AnswerModule } from './modules/AnswerModule';

@Module({
  imports: [
    QuestionModule,
    DatabaseModule,
    SurveyModule,
    OptionModule,
    AnswerModule,
  ],
})
export class AppModule {}

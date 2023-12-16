import { Module } from '@nestjs/common';
import { QuestionModule } from './modules/QuestionModule';
import { DatabaseModule } from './modules/DatabaseModule';
import { SurveyModule } from './modules/SurveyModule';

@Module({
  imports: [
    QuestionModule,
    DatabaseModule,
    SurveyModule,
  ],
})
export class AppModule {}

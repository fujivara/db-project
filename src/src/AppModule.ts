import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './db/schemas/Answer';
import { Grant } from './db/schemas/Grant';
import { OptionAnswer } from './db/schemas/OptionAnswer';
import { Option } from './db/schemas/Option';
import { Permission } from './db/schemas/Permission';
import { Question } from './db/schemas/Question';
import { Role } from './db/schemas/Role';
import { Survey } from './db/schemas/Survey';
import { TextAnswer } from './db/schemas/TextAnswer';
import { User } from './db/schemas/User';
import { QuestionModule } from './modules/QuestionModule';
import { DatabaseModule } from './modules/DatabaseModule';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'shin66',
    port: 3306,
    database: 'mydb',
    entities: [
      Answer,
      Grant,
      Option,
      OptionAnswer,
      Permission,
      Question,
      Role,
      Survey,
      TextAnswer,
      User,
    ],
    synchronize: true,
  }),
  QuestionModule,
  DatabaseModule,
  ],
})
export class AppModule {}

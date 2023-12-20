import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from '../db/schemas/Answer';
import { Grant } from '../db/schemas/Grant';
import { Option } from '../db/schemas/Option';
import { OptionAnswer } from '../db/schemas/OptionAnswer';
import { Permission } from '../db/schemas/Permission';
import { Question } from '../db/schemas/Question';
import { Role } from '../db/schemas/Role';
import { Survey } from '../db/schemas/Survey';
import { TextAnswer } from '../db/schemas/TextAnswer';
import { User } from '../db/schemas/User';


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
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

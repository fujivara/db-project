# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
    
```sql

    -- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` VARCHAR(36) NOT NULL,
  `name` ENUM('CLIENT', 'EXPERT') NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` VARCHAR(36) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `roleId` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_c28e52f758e7bbc53828db92194` (`roleId` ASC) VISIBLE,
  CONSTRAINT `FK_c28e52f758e7bbc53828db92194`
    FOREIGN KEY (`roleId`)
    REFERENCES `mydb`.`role` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`survey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`survey` (
  `id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `state` ENUM('OPENED', 'CLOSED') NOT NULL DEFAULT 'OPENED',
  `userId` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_5963e1aea20c3c7c2108849c08a` (`userId` ASC) VISIBLE,
  CONSTRAINT `FK_5963e1aea20c3c7c2108849c08a`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`question` (
  `id` VARCHAR(36) NOT NULL,
  `text` VARCHAR(255) NOT NULL,
  `type` ENUM('TEXT', 'OPTION') NOT NULL DEFAULT 'TEXT',
  `surveyId` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_a1188e0f702ab268e0982049e5c` (`surveyId` ASC) VISIBLE,
  CONSTRAINT `FK_a1188e0f702ab268e0982049e5c`
    FOREIGN KEY (`surveyId`)
    REFERENCES `mydb`.`survey` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`answer` (
  `id` VARCHAR(36) NOT NULL,
  `userId` VARCHAR(36) NULL DEFAULT NULL,
  `questionId` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_5a26907efcd78a856c8af5829e6` (`userId` ASC) VISIBLE,
  INDEX `FK_a4013f10cd6924793fbd5f0d637` (`questionId` ASC) VISIBLE,
  CONSTRAINT `FK_5a26907efcd78a856c8af5829e6`
    FOREIGN KEY (`userId`)
    REFERENCES `mydb`.`user` (`id`),
  CONSTRAINT `FK_a4013f10cd6924793fbd5f0d637`
    FOREIGN KEY (`questionId`)
    REFERENCES `mydb`.`question` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`permission` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`grant` (
  `id` VARCHAR(36) NOT NULL,
  `assigned_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `permissionId` VARCHAR(36) NULL DEFAULT NULL,
  `roleId` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_8957738fb06cf491d53e3047366` (`permissionId` ASC) VISIBLE,
  INDEX `FK_8484415d531210f79fe28103489` (`roleId` ASC) VISIBLE,
  CONSTRAINT `FK_8484415d531210f79fe28103489`
    FOREIGN KEY (`roleId`)
    REFERENCES `mydb`.`role` (`id`),
  CONSTRAINT `FK_8957738fb06cf491d53e3047366`
    FOREIGN KEY (`permissionId`)
    REFERENCES `mydb`.`permission` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`option`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`option` (
  `id` VARCHAR(36) NOT NULL,
  `text` VARCHAR(255) NOT NULL,
  `questionId` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_b94517ccffa9c97ebb8eddfcae3` (`questionId` ASC) VISIBLE,
  CONSTRAINT `FK_b94517ccffa9c97ebb8eddfcae3`
    FOREIGN KEY (`questionId`)
    REFERENCES `mydb`.`question` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`option_answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`option_answer` (
  `id` VARCHAR(36) NOT NULL,
  `answerId` VARCHAR(36) NULL DEFAULT NULL,
  `optionId` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_e15be4607b7138ed6d31b14265f` (`answerId` ASC) VISIBLE,
  INDEX `FK_2fa5ccbb2bd7405abf40b9206c5` (`optionId` ASC) VISIBLE,
  CONSTRAINT `FK_2fa5ccbb2bd7405abf40b9206c5`
    FOREIGN KEY (`optionId`)
    REFERENCES `mydb`.`option` (`id`),
  CONSTRAINT `FK_e15be4607b7138ed6d31b14265f`
    FOREIGN KEY (`answerId`)
    REFERENCES `mydb`.`answer` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mydb`.`text_answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`text_answer` (
  `id` VARCHAR(36) NOT NULL,
  `text` VARCHAR(255) NOT NULL,
  `answerId` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_81aea62e819db35e97a7798defd` (`answerId` ASC) VISIBLE,
  CONSTRAINT `FK_81aea62e819db35e97a7798defd`
    FOREIGN KEY (`answerId`)
    REFERENCES `mydb`.`answer` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTfull сервіс для управління даними
RESTfull API для управління опитуваннями

## Модель сутності Answer
```
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Question } from './Question';
import { TextAnswer } from './TextAnswer';
import { OptionAnswer } from './OptionAnswer';

@Entity({ name: 'answer' })
export class Answer {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @ManyToOne(() => User)
    user: User;
  @ManyToOne(() => Question, (question) => question.answers)
    question: Question;
  @OneToMany(() => TextAnswer, (textAnswer) => textAnswer.answer,
    { onDelete: 'CASCADE' })
    textAnswers: TextAnswer[];
  @OneToMany(() => OptionAnswer, (optionAnswer) => optionAnswer.answer,
    { onDelete: 'CASCADE' })
    optionAnswers: OptionAnswer[];
}
```

## Головний модуль
```
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
```

## Модуль сутності Answer
```
import { Module } from '@nestjs/common';
import { AnswerController } from '../api/controllers/AnswerController';
import { AnswerService } from '../api/services/AnswerService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextAnswer } from '../db/schemas/TextAnswer';
import { OptionAnswer } from '../db/schemas/OptionAnswer';
import { Question } from '../db/schemas/Question';
import { Answer } from '../db/schemas/Answer';
import { User } from '../db/schemas/User';
import { Option } from '../db/schemas/Option';


@Module({
  imports: [TypeOrmModule.forFeature([
    Answer,
    Question,
    User,
    TextAnswer,
    OptionAnswer,
    Option,
  ])],
  controllers: [AnswerController],
  providers: [AnswerService],
  exports: [AnswerService],
})
export class AnswerModule {}
```

## Контроллер сутності Answer
```
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AnswerService } from '../services/AnswerService';
import { CreateAnswerDto } from '../dtos/CreateAnswerDto';
import { AnswerByIdPipe } from '../pipes/AnswerByIdPipe';
import { CreateAnswerPipe } from '../pipes/CreateAnswerPipe';
import { UpdateAnswerDto } from '../dtos/UpdateAnswerDto';

@Controller('/answers')
export class AnswerController {
  constructor (private answerService: AnswerService) {}

  @Post()
  async create (@Body(CreateAnswerPipe) data: CreateAnswerDto) {
    return this.answerService.create(data);
  }

  @Get('/:answerId')
  async getById (@Param('answerId', AnswerByIdPipe) answerId: string) {
    return this.answerService.getById(answerId);
  }

  @Patch('/:answerId')
  async update (
    @Param('answerId', AnswerByIdPipe) answerId: string,
    @Body() data: UpdateAnswerDto
  ) {
    return this.answerService.update(answerId, data);
  }
}
```

## Сервіс сутності Answer
```
import { BadRequestException, Injectable } from '@nestjs/common';
import { Answer } from '../../db/schemas/Answer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from '../dtos/CreateAnswerDto';
import { Question, QuestionType } from '../../db/schemas/Question';
import { User } from '../../db/schemas/User';
import { OptionAnswer } from '../../db/schemas/OptionAnswer';
import { TextAnswer } from '../../db/schemas/TextAnswer';
import { Option } from '../../db/schemas/Option';
import { UpdateAnswerDto } from '../dtos/UpdateAnswerDto';

@Injectable()
export class AnswerService {
  constructor (
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(OptionAnswer)
    private optionAnswerRepository: Repository<OptionAnswer>,
    @InjectRepository(TextAnswer)
    private textAnswerRepository: Repository<TextAnswer>,
    @InjectRepository(Option)
    private optionRepository:  Repository<Option>
  ) {}

  async create (data: CreateAnswerDto): Promise<Answer> {
    const question = await this.questionRepository.findOneBy({ id: data.questionId });

    const user = await this.userRepository.findOneBy({ id: data.userId });

    const answer = this.answerRepository.create({
      user,
      question,
    });

    const { id } = await this.answerRepository.save(answer);

    if (question.type === QuestionType.OPTION) {
      const option = await this.optionRepository.findOneBy({ id: data.optionAnswer.optionId, question });

      const optionAnswer = this.optionAnswerRepository.create({
        option,
        answer,
      });

      await this.optionAnswerRepository.save(optionAnswer);

    } else {
      const textAnswer = this.textAnswerRepository.create({
        text: data.textAnswer.text,
        answer,
      });

      await this.textAnswerRepository.save(textAnswer);
    }

    return this.getById(id);
  }

  async getById (answerId: string) {
    const answer = await this.answerRepository.findOne({ where: { id: answerId },
      relations: ['user', 'question']   });
    if (answer.question.type === QuestionType.OPTION) {
      const optionAnswer = await this.optionAnswerRepository.findOne({ where: { answer },
        relations: ['option'] });
      answer.optionAnswers = [optionAnswer];
    } else {
      const textAnswer = await this.textAnswerRepository.findOne({ where: { answer } });
      answer.textAnswers = [textAnswer];
    }
    return answer;
  }

  async update (answerId: string, data: UpdateAnswerDto) {
    const answer = await this.getById(answerId);

    const questionType = answer.question.type;

    if (!data.textAnswer && !data.optionAnswer) {
      throw new BadRequestException('For this question type respectful answer should be provided');
    }

    if (questionType === QuestionType.OPTION && !data.optionAnswer ||
      questionType === QuestionType.TEXT && !data.textAnswer
    ) {
      throw new BadRequestException('For this question type respectful answer should be provided');
    }

    if (questionType === QuestionType.OPTION) {
      const option = await this.optionRepository.findOneBy({
        id: data.optionAnswer.optionId,
      });

      if (!option) {
        throw new BadRequestException('Option with such id not found');
      }

      await this.optionAnswerRepository.createQueryBuilder()
        .update(OptionAnswer)
        .set({ option })
        .where('id = :id', { id: answer.optionAnswers[0].id })
        .execute();

    } else {

      await this.textAnswerRepository.createQueryBuilder()
        .update(TextAnswer)
        .set({ text: data.textAnswer.text })
        .where('id = :id', { id: answer.textAnswers[0].id })
        .execute();
    }

    return this.getById(answerId);
  }
}

```
import { Module } from '@nestjs/common';
import { OptionController } from '../api/controllers/OptionController';
import { OptionService } from '../api/services/OptionService';
import { Option } from '../db/schemas/Option';
import { Question } from '../db/schemas/Question';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Question, Option])],
  controllers: [OptionController],
  providers: [OptionService],
})
export class OptionModule {}

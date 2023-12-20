import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Answer } from './Answer';
import { Option } from './Option';


@Entity({ name: 'option_answer' })
export class OptionAnswer {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @ManyToOne(() => Answer, (answer) => answer.optionAnswers,
    { onDelete: 'CASCADE' })
    answer: Answer;
  @ManyToOne(() => Option, (option) => option.optionAnswers,
    { onDelete: 'CASCADE' })
    option: Option;
}
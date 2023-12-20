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
  @ManyToOne(() => Question, (question) => question.answers,
    { onDelete: 'CASCADE' })
    question: Question;
  @OneToMany(() => TextAnswer, (textAnswer) => textAnswer.answer,
    { onDelete: 'CASCADE' })
    textAnswers: TextAnswer[];
  @OneToMany(() => OptionAnswer, (optionAnswer) => optionAnswer.answer,
    { onDelete: 'CASCADE' })
    optionAnswers: OptionAnswer[];
}

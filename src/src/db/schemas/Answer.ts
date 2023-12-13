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
  @OneToMany(() => TextAnswer, (textAnswer) => textAnswer.answer)
    textAnswers: TextAnswer[];
  @OneToMany(() => OptionAnswer, (optionAnswer) => optionAnswer.answer)
    optionAnswers: OptionAnswer[];
}

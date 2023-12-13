import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './Question';
import { OptionAnswer } from './OptionAnswer';

@Entity({ name: 'option' })
export class Option {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @Column()
    text: string;
  @ManyToOne(() => Question, (question) => question.options, { nullable: true })
    question: Question;
  @OneToMany(() => OptionAnswer, (optionAnswer) => optionAnswer.option)
    optionAnswers: OptionAnswer[];
}

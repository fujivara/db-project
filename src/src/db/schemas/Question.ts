import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Survey } from './Survey';
import { Answer } from './Answer';
import { Option } from './Option';

export enum QuestionType {
  TEXT = 'TEXT',
  OPTION = 'OPTION'
}

@Entity({ name: 'question' })
export class Question {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @Column({ nullable: false })
    text: string;
  @Column({ type: 'enum', enum: QuestionType, default: QuestionType.TEXT })
    type: QuestionType;
  @ManyToOne(() => Survey,
    (survey) => survey.questions, { nullable: true })
    survey: Survey;
  @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[];
  @OneToMany(() => Option, (option) => option.question)
    options: Option[];
}

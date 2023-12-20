import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Answer } from './Answer';


@Entity({ name: 'text_answer' })
export class TextAnswer {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @Column({ nullable: false })
    text: string;
  @ManyToOne(() => Answer, (answer) => answer.textAnswers,
    { onDelete: 'CASCADE' })
    answer: Answer;
}
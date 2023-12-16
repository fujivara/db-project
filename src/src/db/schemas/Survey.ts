import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Question } from './Question';

export enum SurveyState {
  OPENED = 'OPENED',
  CLOSED = 'CLOSED'
}

@Entity({ name: 'survey' })
export class Survey {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @Column()
    title: string;
  @Column()
    description: string;
  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  @Column({ type: 'enum', enum: SurveyState, default: SurveyState.OPENED })
    state: SurveyState;
  @ManyToOne(() => User, (user) => user.surveys, { nullable: false })
    user: User;
  @OneToMany(() => Question, (question) => question.survey)
    questions: Question[];
}
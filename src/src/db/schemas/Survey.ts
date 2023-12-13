import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import now = jest.now;
import { User } from './User';
import { Question } from './Question';

export enum State {
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
  @Column({ type: 'enum', enum: State, default: State.OPENED })
    state: State;
  @ManyToOne(() => User, (user) => user.surveys, { nullable: false })
    user: User;
  @OneToMany(() => Question, (question) => question.survey)
    questions: Question[];
}
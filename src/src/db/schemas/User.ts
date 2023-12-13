import { Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './Role';
import { Survey } from './Survey';
import { Answer } from './Answer';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @Column({ name: 'first_name' })
    firstName: string;
  @Column({ name: 'last_name' })
    lastName: string;
  @Column({ nullable: false })
    username: string;
  @Column({ nullable: false })
    email: string;
  @Column()
    password: string;
  @ManyToOne(() => Role, (role) => role.users)
    role: Role;
  @OneToMany(() => Survey, (survey) => survey.user)
    surveys: Survey[];
  @OneToMany(() => Answer, (answer) => answer.user)
    answers: Answer[];
}

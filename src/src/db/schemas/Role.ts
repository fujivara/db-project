import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Grant } from './Grant';


export enum RoleName {
  CLIENT = 'CLIENT',
  EXPERT = 'EXPERT'
}

@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @Column({ type: 'enum', enum: RoleName  })
    name: RoleName;
  @OneToMany(() => User, (user) => user.role)
    users: User[];
  @OneToMany(() => Grant, (grant) => grant.role)
    grants: Grant[];
}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grant } from './Grant';


@Entity({ name: 'permission' })
export class Permission {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @Column()
    name: string;
  @OneToMany(() => Grant, (grant) => grant.permission)
    grants: Grant[];
}
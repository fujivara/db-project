import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from './Permission';
import { Role } from './Role';


@Entity({ name: 'grant' })
export class Grant {
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @CreateDateColumn({ name: 'assigned_at' })
    assignedAt: Date;
  @ManyToOne(() => Permission, (permission) => permission.grants)
    permission: Permission;
  @ManyToOne(() => Role, (role) => role.grants)
    role: Role;
}
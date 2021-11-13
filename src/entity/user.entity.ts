import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    idx: number;

    @Column()
    name: string;

    @Column()
    studentNo: string;

    @Column({ default: 'ACTIVE'})
    status: string;
}

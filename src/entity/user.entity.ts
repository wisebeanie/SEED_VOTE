import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    idx: number;

    @Column()
    pwd: string;

    @Column()
    studentNo: string;

    @Column({ default: 'ACTIVE'})
    status: string;
}

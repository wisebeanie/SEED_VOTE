import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @Length(8, 13)
    pwd: string;

    @IsString()
    @Length(10)
    studentNo: string;
}
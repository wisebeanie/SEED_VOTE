import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @Length(0, 10)
    name: string;

    @IsString()
    @Length(10)
    studentNo: string;
}
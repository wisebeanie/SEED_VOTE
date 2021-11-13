import { Body, Controller, Post } from '@nestjs/common';
import { ResponseMessage } from 'config/baseResponseStatus';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly baseResponse: ResponseMessage
    ) {}

    /*
        API No. 1.1
        API Name: 회원가입 api
        [POST] /users
        body: name, studentNo
    */
    @Post()
    async postUsers(@Body() body: CreateUserDto) {
        return await this.userService.createUsers(body);
    }

}

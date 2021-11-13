import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseMessage } from 'config/baseResponseStatus';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { errResponse, response } from 'config/response';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        private readonly baseResponse: ResponseMessage
    ) {}

    async createUsers(body: CreateUserDto) {
        try {
            const { name, studentNo } = body;

            // validation 
            const checkUser = await this.userRepository.findOne({ studentNo: studentNo, status: 'ACTIVE' });
            
            // 중복되는 경우
            if (checkUser) {
                return errResponse(this.baseResponse.DUPLICATED_USER);
            }

            let userReg = this.userRepository.create();

            userReg = {     
                idx: userReg.idx,
                name: name,
                studentNo: studentNo,
                status: userReg.status
            }

            const createUserRow = await this.userRepository.save(userReg);

            return response(this.baseResponse.SUCCESS, { addedUser: createUserRow.idx });
        } catch (err) {
            console.log(`CREATE USER SERVICE ERROR:\n${err.message}`);

            return errResponse(this.baseResponse.DB_ERROR);
        } 
    }
}

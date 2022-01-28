import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async valdiateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user.password === password) {
            const {password, ...result} = user;
            return result;
        }

        return null;
    }
}

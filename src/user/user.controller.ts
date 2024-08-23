import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('age') age: number,
  ): Promise<User> {
    return this.userService.createUser(name, age);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}

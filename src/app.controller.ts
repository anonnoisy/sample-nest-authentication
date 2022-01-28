import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() request: Request) {
    return request.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

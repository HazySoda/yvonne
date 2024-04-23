import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('users')
  async getUsers() {
    return this.appService.users({})
  }

  @Post('users')
  async createUser() {
    return this.appService.createUser({
      email: 'test@example.com',
      name: 'John Doe',
    })
  }
}

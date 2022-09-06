import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('?')
  getHello(@Query('name') name:string): string {
    if(!name){
      name = 'World';
    }
    return this.appService.getHello(name);
  }
}

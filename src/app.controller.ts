import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';


@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'GetUser')
  getUser(data: any) {
    console.log('TCL: AppController -> getUser -> data', data)
    return this.appService.getUser(data.id);
  }
}

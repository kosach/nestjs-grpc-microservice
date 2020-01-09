import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(id?: string) {
    console.log('TCL: AppService -> getUser -> id', id)
    return {
      id,
      protocolType: "gRPC",
      firstName: "test"
    };
  }
}

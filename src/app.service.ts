import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello GitHub!';
  }
}

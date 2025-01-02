import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { query } from 'express';
import { Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { get } from 'http';

@Controller('users')
export class UsersController {

constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers(): string {
    return this.usersService.getUsers();
  }


  @Get(':studentName')
  findstudentName(@Param('studentName') studentName: string): string {

    //return 'Hello '+studentName+'';
    return JSON.stringify({
      "name": studentName,
      "age": 23,
      "city": "Hyderabad"
    });
  }

  @Post()
  AddStudent(): string {

    return 'Student Added Successfully';
  }

  @Patch(':studentName')
  updateStudent(@Param('studentName') studentName: string, @Body() usermodel:{}) {

    return {...usermodel};
  }

  @Get()

  getStudents(@Query('name') name?: 'Ronak'): string {
    if (name == 'Ronak') {
      return JSON.stringify({
        "name": "Ronak",
        "age": 23,
        "city": "Hyderabad"

      });
     
    }else{
      return JSON.stringify({
        "name": name,
        "age": 23,
        "city": "Hyderabad"

      });
    }
  }

  @Post('AdduserData')

  AddUserInDB(@Body() userdata: {}): string {

    
    return this.usersService.AddUserInDB(userdata);
 
  }
  @Post('Adduseringetusers')
  Adduseringetusers(@Param('username') username: string): string {
    return this.usersService.Adduseringetusers(username);
  }

  @Get('getuserbyid/:id')

  getUserById(@Param('id') id: number): string {  
    return this.usersService.getUserById(+id);
  }

}

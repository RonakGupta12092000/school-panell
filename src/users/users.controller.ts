import { Controller ,Get,Post} from '@nestjs/common';
import { Param } from '@nestjs/common';


@Controller('users')
export class UsersController {

  @Get(':studentName')
  findstudentName(@Param('studentName')studentName:string):string{

    //return 'Hello '+studentName+'';
    return JSON.stringify({
      "name":studentName,
      "age":23,
      "city":"Hyderabad"
    });
  }

  @Post()
AddStudent():string{

    return 'Student Added Successfully';    
}



}

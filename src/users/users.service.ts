import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    getUsers(): string {
        return 'Hello GitHub!';
    }   


    AddUserInDB(@Param('userdata') userdata:{}): string {

        const user = {
            name: 'John Doe',
            age: 30,
            isSubscribed: true,
            username:{},
        };

        if(userdata){
           // user['userdata'] = {...userdata};    
            user['username'] = userdata;    
           //userdata = user.Add(userdata);

        }
       
        return JSON.stringify(user);


    }

}

import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsersService {
    //public const users = [];
    private readonly users = [];

    constructor() {
        // Initialize the users array with 100 users
        for (let i = 1; i <= 100; i++) {
            this.users.push({
                id: i,
                name: `User ${i}`,
                age: 20 + (i % 30), // Ages between 20 and 49
                isSubscribed: i % 2 === 0, // Alternate subscription status
                username: `user${i}`
            });
        }
    }

    getUsers(): string {
        // const users = [];
        // for (let i = 1; i <= 100; i++) {
        //     users.push({
        //         name: `User ${i}`,
        //         age: 20 + (i % 30), // Ages between 20 and 49
        //         isSubscribed: i % 2 === 0, // Alternate subscription status
        //         username: `user${i}`
        //     });
        // }
        // return JSON.stringify(users);

        
    
        return JSON.stringify(this.users);
    }


    Adduseringetusers(@Param('username') username: string): string {
        const users = [];
        for (let i = 1; i <= 100; i++) {
            users.push({
                name: `User ${i}`,
                age: 20 + (i % 30), // Ages between 20 and 49
                isSubscribed: i % 2 === 0, // Alternate subscription status
                username: `user${i}`
            });
        }
        return JSON.stringify(users);
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

    getUserById(@Param('id') id: number): string {

        const user = this.users.find(user => user.id == id);
        if (user) {
            return JSON.stringify(user);
        } else {
            return 'User not found';
        }
    }


    AddStudent(): string {
        return 'Student Added Successfully';
    }

}

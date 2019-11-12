export class User {
    userID: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    token: string;

    constructor(userID: number, firstName: string, lastName: string, email: string, username: string, password: string, token: string){
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.token = token;
    }

}

import { User } from 'src/app/security/models/user.model';
import { Poll } from './poll.model';

export class PollUser {

    constructor(public pollUserID : number, public userID : User, public pollID: Poll){}
}

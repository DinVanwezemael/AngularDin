import { Optie } from './optie.model';

export class PollDto {
    constructor(public pollName: string, public pollID: number, public username: string, public polluserID: number, public userID: number, public opties: Optie[]){}
}

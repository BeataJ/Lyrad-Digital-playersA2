import { Position } from './position';

export class RegistrationViewModel {
    firtName: string;
    lastName: string;
    email: string;
    bio: string;
    dob: Date;
    teamIdJoined: number;
    heightInFeet: number;
    //heightInInches: number;
    weight: number;
    injuries: string[];
    position:Position;
    passward: string;

    constructor() {
        this.injuries = [];
    }
}
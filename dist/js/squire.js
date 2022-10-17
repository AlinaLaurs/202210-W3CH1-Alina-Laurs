import { Character } from './character';
export class Squire extends Character {
    constructor(name, family, age, master, ballingGrade) {
        super(name, family, age);
        this.master = master;
        this.ballingGrade = ballingGrade;
        this.message = 'Soy un loser.';
    }
}

import { Character } from './character';
import { King } from './king';
import { Fighter } from './fighter';
import { Squire } from './squire';
import { Adviser } from './adviser';

const Jamie = new Fighter('Jamie', 'Lannister', 40, 'sword', 10);
const Daenerys = new Fighter('Daenerys', 'Targaryen', 27, 'dragon', 9);

const characters = [
    new King('Joffrey', 'Baratheon', 15, 4),
    Jamie,
    Daenerys,
    new Adviser('Tyrion', 'Lannister', 42, Daenerys),
    new Squire('Bronn', '', 49, Jamie, 10),
];

console.log(characters);

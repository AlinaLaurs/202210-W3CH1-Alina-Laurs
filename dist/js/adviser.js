import { Character } from './character';
export class Adviser extends Character {
    constructor(name, family, age, advised) {
        super(name, family, age);
        this.advised = advised;
        this.message = 'No sé por qué, pero creo que voy a morir pronto.';
    }
}

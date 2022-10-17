export class Character {
    name: string;
    family: string;
    age: number;

    lifeStatus: boolean;
    message: string;

    // falta imagen

    static show = 'GoT';
    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;

        this.lifeStatus = true;
        this.message = '';
    }

    communicate() {
        return this.message;
    }

    death() {
        this.lifeStatus = false;
    }
}

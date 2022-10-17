export class Character {
    constructor(name, family, age) {
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
// falta imagen
Character.show = 'GoT';

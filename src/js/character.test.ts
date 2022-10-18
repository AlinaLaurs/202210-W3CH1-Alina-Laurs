import { Character, ICharacter } from './character';

describe('Given the class Character', () => {
    describe('When I instantiate the class', () => {
        test('Then we have and object of this class', () => {
            // Arrange
            const name = 'Pepe';
            const family = 'Pepes';
            const age = 33;
            const expectedResult = {
                name,
                family,
                age,
                isAlive: true,
                message: '',
            };
            // Act
            const character = new Character(name, family, age); // Instancia
            // Assert
            expect(character).toEqual(expectedResult);
        });
    });
});

describe('Given the class Character', () => {
    describe('When I instantiate the class', () => {
        let expectedResult: ICharacter;
        let character: Character;
        beforeEach(() => {
            // Arrange
            const name = 'Pepe';
            const family = 'Pepes';
            const age = 33;
            const expectedResult = {
                name,
                family,
                age,
                isAlive: true,
                message: '',
            };
            // Act
            const character = new Character(name, family, age);
        });
        test('Then we have and object of this class', () => {});
        // Assert
        expect(character).toEqual(expectedResult);
    });
    test(`And we run method death, then property isAlive should be false`, () => {
        expect(character.isAlive).toBe(true);
        character.death();
        expect(character.isAlive).toBe(false);
    });
});

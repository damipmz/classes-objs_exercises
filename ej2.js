/* Ejercicio 2: Queremos mejorar nuestro creador de personajes. 
Necesitamos que los personajes sean capaces de saludar, atacar y recibir daño. 
Considere los siguientes métodos.
*/

class Hero {
    constructor(name = 'heroe',ranking = '00', health = 100, damage = 5, experience = 0) {
        this.name = name                 
        this.ranking= ranking
        this.health= health
        this.damage= damage
        this.experience= experience   
           
    }

    talk(name){
        console.log(`Hola ${name}, vamos a pelear.`);
    }

    attack(attackPower){
        console.log(`${this.name} ataco con un poder de ${attackPower}.`);
        this.experience += 10;
    }

    takeDamage(valueDamage){
        this.health -= valueDamage;
        console.log(`${this.name} recibio ${valueDamage} de daño y le quedan ${this.health} de vida.`);
    }
}

const myHero = new Hero ('Superman','00', 100, 5, 0);

myHero.talk('Robertito');
myHero.attack(60);
myHero.takeDamage(35);

console.log(myHero);







/* const talk = () => console.log(`Hola ${this.name}, vamos a pelear.`);

const attack = (attackPower) => {
    this.experience += 10;
    return `${this.name} ataco con un poder de ${attackPower} de daño.`;
}

const takeDamage = (damage) => {
    this.health -= damage;
    return `${this.name} recibio ${damage} de daño y le queda ${this.health} de vida.`
}

console.log(myHero); */
/* Ejercicio 3: Ahora queremos hacer una simulación de batalla Jugador vs Jugador. 
Necesitamos una propiedad que diga si el héroe está vivo o no.
 Modificar el método attack para hacer daño a otro héroe. 
 Controlar cuando uno de los héroes es derrotado y mostrar un mensaje acorde a la situación.
*/

//propiedades y metodos: isAlive, attack.

class Hero {
  constructor(
    name = "heroe",
    ranking = "00",
    health = 100,
    damage = 5,
    experience = 0
  ) {
    this.name = name;
    this.ranking = ranking;
    this.health = health;
    this.damage = damage;
    this.experience = experience;
    this.isAlive = true;
  }

  talk(name) {
    console.log(`Hola ${name}, vamos a pelear.`);
  }

  attack(heroObjetive) {
    console.log(
      `${this.name} ataco a ${heroObjetive.name} con un poder de ${this.damage}.`
    );
    heroObjetive.takeDamage(this.damage);
    if (heroObjetive.isAlive == false) {
      this.experience += 10;
    }
  }

  takeDamage(valueDamage) {
    this.health -= valueDamage;
    console.log(
      `${this.name} recibio ${valueDamage} de daño y le quedan ${this.health} de vida.`
    );
    if (this.health <= 0) {
      this.isAlive = false;
      console.log(`${this.name} fue derrotado`);
    }
  }
}

const myHero = new Hero("Superman", "00", 100, 5, 0);
const hero2 = new Hero("Green Lantern", "03", 90, 8, 0); // 2do jugador, ¿instancio al objeto?

while (myHero.isAlive && hero2.isAlive) {
  myHero.attack(hero2);
  if (hero2.isAlive) {
    hero2.attack(myHero);
  }
}

if (myHero.isAlive) {
  console.log(`¡${myHero.name} VENCIO A ${hero2.name} :O !`);
} else {
  console.log(`¡${hero2.name} VENCIO A ${myHero.name} :O ! `);
}

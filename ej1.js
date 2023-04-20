/* Ejercicio 1: Pensemos que tenemos que hacer un juego. 
Y lo primero que necesitamos es que se puedan crear heroes en el juego. 
Haga una funcion que utilice una clase para crear nuestro objeto 'heroe'
Debe tener las siguientes propiedades y valores.*/

class Hero {
    constructor(ranking, health, damage, experience, name = 'heroe') {                
        this.ranking= ranking
        this.health= health
        this.damage= damage
        this.experience= experience   
        this.name = name    
    }
}

const myHero = new Hero ('00', 100, 5, 0);

console.log(myHero);


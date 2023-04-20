/* 
 Ejercicio 4: Hubo una conferencia de programación hace poco y necesitamos saber 
 quienes fueron las personas que estuvieron en el evento. 
 Sabemos que la información está guardada en un array de objetos. 
 Necesitamos saber cuántas personas del continente que escogimos asistieron. 
 Haga una función para devolver dicho valor.

const list = [
  { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Maria’, country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

return (‘Asia’) ==> 2
*/

const list1 = [
    {
        firstName: 'Noah',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'JavaScript'
    },
    {
        firstName: 'Carla',
        country: 'Tahiti',
        continent: 'Oceania',
        age: 28,
        language: 'JavaScript'
    },
    {
        firstName: 'Maria',
        country: 'Taiwan',
        continent: 'Asia',
        age: 35,
        language: 'HTML'
    },
    {
        firstName: 'Ramiro',                                                                                                                                    
        country: 'Tajikistan',
        continent: 'Asia',
        age: 30,
        language: 'CSS'
    }
];

const DevsFromContinents = (listDevs, continent) => { 
    const arrayCant = listDevs.filter(devs => devs.continent === continent).length
    return arrayCant;
}

const devsFromAsia = DevsFromContinents(list1, 'Asia');

console.log(`Hay ${devsFromAsia} desarrolladores de Asia`);
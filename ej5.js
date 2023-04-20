/* Ejercicio 5: Teniendo en cuenta la misma conferencia anterior, 
necesitamos poder personalizar un mensaje para cada persona que asista al evento la próxima vez. 
Para eso, nuestra tarea es tener una función que devuelva un array donde cada posición 
tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.

const list = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

return ==>
[
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];

*/

const list2 = [
    {
        firstName: 'Sofia',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java'
    },
    {
        firstName: 'Lukas',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python'
    },
    {
        firstName: 'Madison',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby'
    }
]

const addingGreetings = (listDevs) => {
    return listDevs.map((devs) => {
        const {firstName, language} = devs // extraigo de cada objeto estas propiedades
        const sayingHi = `¡Hola! ${firstName}, me gusta ${language} a mi tambien.` // greeting contendra esta oracion

        return {
            ...devs, //separo devs (la lista)
            greeting: sayingHi//agrego la propeidad greeting a cada objeto y le asigno el valor de la variable que asigne
        }
    })
}

const guestGreetings = addingGreetings(list2)
console.log(guestGreetings);


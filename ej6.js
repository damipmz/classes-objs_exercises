/* 
Ejercicio 6: Teniendo en cuenta la misma conferencia anterior, 
necesitamos saber si van a haber programadores de cierto lenguaje para poder preparar 
contenido específico. Por lo tanto, necesitamos una función que nos devuelva “true” o “false” 
cuando le preguntemos por cierto lenguaje. Por ejemplo:

const list = [
  { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 28, language: 'Javascript' },
  { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];


return ('Ruby') ==> true
*/

const list3 = [
  {
    firstName: "Emma",
    country: "Netherlands",
    continent: "Europe",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Piotr",
    country: "Poland",
    continent: "Europe",
    age: 28,
    language: "Javascript",
  },
  {
    firstName: "Jayden",
    country: "Jamaica",
    continent: "Americas",
    age: 42,
    language: "Javascript",
  },
];

const existDevOfxLanguage = (listDevs, language) => {
  const lenguages = listDevs.map((devs) => devs.language);
  return lenguages.includes(language);
};

console.log(existDevOfxLanguage(list3, "Javascript"));

//const thereIsThatLanguaje = ()

//const language2 = existDevOfxLanguage(list3, 'ruby')

//console.log(`${language2}`)

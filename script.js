const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planetEl.innerHTML += `
<h1>Planets:</h1>
`
planets.forEach(planet => {
    planetEl.innerHTML += `
    <h2>${planet}</h2>
    `
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const planetsWithUpperCase = planets.map((planet) => {
    planet = planet.charAt(0).toUpperCase() + planet.slice(1)
    return planet
})

console.log(planetsWithUpperCase)

const planetEl2 = document.getElementById("planets2")
planetEl2.innerHTML += `
<h1>Planets With Upper Case:</h1>
`
planetsWithUpperCase.forEach(planet => {
    planetEl2.innerHTML += `
    <h2>${planet}</h2>
    `
});


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithE = planetsWithUpperCase.filter((planet) => {
    if (planet.includes("e")) {
        return planet
    }
})

console.log(planetsWithE)

const planetEl3 = document.getElementById("planets3")
planetEl3.innerHTML += `
<h1>Planets With E:</h1>
`
planetsWithE.forEach(planet => {
    planetEl3.innerHTML += `
    <h2>${planet}</h2>
    `
});
/**
 * 
 * Using JavaScript, create a "date-matching" application that has the following features:

Three lists containing names (Group A, Group B and Places), the list can be represented with Object or Array.
The application should randomly match and produce 2 people at each refresh. 
The result produced should be in the format:
Group A['name'] and Group B['name'] will be going on a dinner date at Places['name'].
However, the program should go through the entire list in Group A before repeating names.
 */
var groupA = ['John', 'James', 'Alex'], 
    groupB = ['Chidinma', 'Blessing', 'Esther'], 
    places = ['Nicon Suite', 'Mr. Beans eatry'];

function dateMatching(){
    let index_a = randomize(groupA.length);
    let index_b = randomize(groupB.length);
    let place_index = randomize(places.length);

    return `${ groupA[index_a] } and ${ groupB[index_b] } will be going on a dinner date at ${places[place_index]}`
}


function randomize(len){
    return Math.floor(Math.random() * len);
}

console.log(
    dateMatching()
)
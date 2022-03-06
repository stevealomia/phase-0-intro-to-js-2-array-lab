// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
};

function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
    console.log(cats);
};

function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
};

//comeback to this one
function appendCat(name) {
    const newCats = [...cats, name];
    return  newCats;
};
// comeback here 
function prependCat(name) {
    const newCats = [name, ...cats];
    return  newCats;
};

function removeLastCat() {
    return cats.slice(0,-1);
    
};

function removeFirstCat() {
    console.log(cats.slice(1));
    return cats.slice(1); 
};
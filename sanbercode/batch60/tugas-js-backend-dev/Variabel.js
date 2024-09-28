var varNumber = 10;
var varString = "Hello";

let letBoolean = true;
let letUndefined;


const constObject = {
    name: "John",
    age: 30
};
let letArray = [1, 2, 3, 4];
const constFunction = function () {
    return "This is a function";
};

let sum = varNumber + 20;
console.log(`Sum (varNumber + 20): ${sum}`);

let pengurangan = sum - 10;
console.log(`pengurangan (sum - 10): ${pengurangan}`);

let product = varNumber * 2;
console.log(`Product (varNumber * 2): ${product}`);

let pembagian = varNumber / 2;
console.log(`pembagian (varNumber / 2): ${pembagian}`);
let remainder = varNumber % 3;
console.log(`Remainder (varNumber % 3): ${remainder}`);

console.log(`Is varNumber > 5? ${varNumber > 5}`);


console.log(`Is varNumber < 20? ${varNumber < 20}`);


console.log(`Is varNumber == 10? ${varNumber == 10}`);


console.log(`Is varString != 'World'? ${varString != 'World'}`);


console.log(`Is varNumber >= 10? ${varNumber >= 10}`);


console.log(`Is varNumber <= 15? ${varNumber <= 15}`);


console.log(`Type of varNumber: ${typeof varNumber}`);
console.log(`Type of varString: ${typeof varString}`);
console.log(`Type of letBoolean: ${typeof letBoolean}`);
console.log(`Type of letUndefined: ${typeof letUndefined}`);
console.log(`Type of constNull: ${typeof constNull}`);
console.log(`Type of constBigInt: ${typeof constBigInt}`);
console.log(`Type of constSymbol: ${typeof constSymbol}`);
console.log(`Type of constObject: ${typeof constObject}`);
console.log(`Type of letArray: ${typeof letArray}`);
console.log(`Type of constFunction: ${typeof constFunction}`);


letArray.push(5);
console.log(`Array after push: ${letArray}`);


constObject.age = 31;
console.log(`Updated object: ${JSON.stringify(constObject)}`);


console.log(`Function output: ${constFunction()}`);

let Flavors = prompt(`what flavor's of icecream would you like? Please separate each flavor with a ","`);
let arrayFlavors = [];
// console.log(Flavors)
const inputToArray = () => {
  arrayFlavors = Flavors.split(',');
}

inputToArray();
// console.log(Array of flavors)

const tableOrders = {};

const arrayToObject = () => {
  for (let i = 0; i < arrayFlavors.length; i+=1) {
    let flavor = arrayFlavors[i];
    if (tableOrders[flavor]) {
      tableOrders[flavor] += 1;
    } else {
      tableOrders[flavor] = 1;
    }
  }
  return tableOrders;
}


arrayToObject();
console.log(tableOrders)
const tableFlavors = Object.keys(tableOrders);

console.log(`The flavors that had been ordered : ${tableFlavors}`)

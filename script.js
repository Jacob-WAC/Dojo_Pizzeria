//this give you a pizza with whatever you input
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var p1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
var p3 = pizzaOven(
  "thin crust",
  "white sauce",
  ["cheddar", "mozzarella"],
  "beef"
);
var p4 = pizzaOven("brooklyn style", "traditional", "mozzarella", [
  "Buffalo Chicken",
  "Prosciutto",
]);

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

//this gives you a random pizza!
function pizzaRandom() {
  var pizzaTypes = {
    crustType: ["deep dish", "hand tossed", "thin crust", "brooklyn style"],
    sauceType: ["traditional", "marinara", "white sauce", "Artichoke Sauce"],
    cheeses: ["mozzarella", "cheddar", "provolone", "parmesan"],
    toppings: ["pepperoni", "bacon", "black olives", "green peppers"],
  };

  var randomPizza = {};
  randomPizza.crustType =
    pizzaTypes.crustType[
      pizzaTypes.crustType.length - 1 - Math.floor(Math.random() * 3)
    ];
  randomPizza.sauceType =
    pizzaTypes.sauceType[
      pizzaTypes.crustType.length - 1 - Math.floor(Math.random() * 3)
    ];
  randomPizza.cheeses =
    pizzaTypes.cheeses[
      pizzaTypes.crustType.length - 1 - Math.floor(Math.random() * 3)
    ];
  randomPizza.toppings =
    pizzaTypes.toppings[
      pizzaTypes.crustType.length - 1 - Math.floor(Math.random() * 3)
    ];
  return randomPizza;
}

console.log(pizzaRandom());

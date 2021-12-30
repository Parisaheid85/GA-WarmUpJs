//Count total cost

var home = {
  kitchen: {
    pantry: [
      {
        label: "hemp seeds",
        cost: 12,
      },
      {
        label: "flour",
        cost: 4,
      },
      {
        label: "nutella",
        cost: 5,
      },
      {
        label: "honey",
        cost: 8,
      },
      {
        label: "oats",
        cost: 4,
      },
    ],

    bench: [
      {
        brand: "vitamix",
        color: "red",
      },
      {
        brand: "kitchenaid",
        color: "white",
      },
      {
        brand: "breville",
        color: "black",
      },
    ],

    fridge: [
      {
        name: "no frills pudding from wollies",
        comment: "taste great",
        ingredients: ["sugar", "preservatives", "vomit"],
      },
    ],
  },
};

let index = 0;
let sum = 0;

while (index < home.kitchen.pantry.length) {
  let pantry = home.kitchen.pantry[index].cost;
  sum = sum + pantry;
  index++;
}

console.log((home.kitchen.fridge[0].comment = "taste like vomit"));

let index = 0;
// write a code for sum
let sum = 0;
home.kitchen.pantry[0].cost +
  home.kitchen.pantry[1].cost +
  home.kitchen.pantry[2].cost +
  home.kitchen.pantry[3].cost +
  home.kitchen.pantry[4].cost;
while (index < home.kitchen.pantry.length) {
  index++;
}
console.log(sum);

var index = 0;
var totalCost = 0;
var pantry = home["kitchen"]["pantry"];
while (index < pantry.length) {
  totalCost = pantry[index].cost + totalCost;
  index++;
}
console.log(totalCost);

//link https://gist.github.com/epoch/fa9c162172e764acabe1f0e190cf7b7f

let park = [
  { name: "Wizard Whitebeard" },
  { name: "Woof" },
  { name: "Wenda" },
  { name: "Wally" },
];

let station = [
  { name: "Wizard Whitebeard" },
  { name: "Woof" },
  { name: "Wally" },
  { name: "Welma" },
  { name: "Odlaw" },
  { name: "Wenda" },
];

//link https://gist.github.com/epoch/fa9c162172e764acabe1f0e190cf7b7f

let park = [
  { name: "Wizard Whitebeard" },
  { name: "Woof" },
  { name: "Wenda" },
  { name: "Wally" },
];

let station = [
  { name: "Wizard Whitebeard" },
  { name: "Woof" },
  { name: "Wally" },
  { name: "Welma" },
  { name: "Odlaw" },
  { name: "Wenda" },
];

function wheresWally(location) {
  let index = 0;
  while (index < location.length) {
    if (location.length[index].name === "Wally") {
      return index;
    }
    index++;
  }
}
wheresWally(park);

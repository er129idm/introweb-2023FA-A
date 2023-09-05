let jsonObject = {
  "title" : "Animal Crossing",
  "medium" : "Video Game",
  "year" : 2020,
  "characters" : ["Mr. Resetti", "Able Sisters", "Tom Nook", "K.K. Slider", "The Villager"]
};

console.log(jsonObject['title']);
console.log(jsonObject['medium']);
console.log(jsonObject['year']);
// console.log(jsonObject['characters'][2]);

for (let i = 0; i < jsonObject['characters'].length; i++){
  console.log("Current index: " + i + " - " + jsonObject['characters'][i]);
}


// for (let i = 0; i < jsonObject['characters'].length; i++ ) {
//   console.log(jsonObject['characters'][i]);
// }

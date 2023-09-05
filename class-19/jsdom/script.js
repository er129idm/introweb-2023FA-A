var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

var times = ["too much", "not enough", "the perfect number of hours", "rarely"];

// addEventListener requires two parameters: the event that is occurring and a callback that includes the event
// heading.addEventListener("mouseover", demonstrationFunction);
// document.addEventListener("mousemove", demonstrationFunction);

executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

//////////////////////////

function demonstrationFunction() {

  // console.log("Called function....");

  // alert("Yo!");

  /// Modifying css directly
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  // console.log(randomRed);
  // console.log(randomGreen);
  // console.log(randomBlue);

  // rgb(100,400,300);
  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  // console.log(outputColorString);

  heading.style.color = outputColorString;
  heading.style.fontSize = "5rem";
  heading.style.textShadow = "0px 0px 10px #fff";
  heading.style.transform = "rotate(10deg)";

  /// Modifying classes
  // console.log("Class list BEFORE:");
  // console.log(heading.classList);

  // heading.classList.toggle("specialTitle");

  // console.log("Class list AFTER:");
  // console.log(heading.classList);

  /// Modifying HTML content
  // outputParagraph.innerHTML = "Some new text...";
  var currentInputText = inputElement.value;
  // var currentInputAsNumber = parseFloat(currentInputText);
  // console.log(currentInputText / 5.5);
  // console.log(currentInputAsNumber / 5.5);


  // outputParagraph.innerText = "My cat " + currentInputText + "s way too much.";


  // alert("HIIIIII.");
  // console.log("Hey there...");
  // var inputContents = document.getElementById("myInput").value;
  // alert("You input " + inputContents + "!");
}

///////

function generate(incUserInput) {
  var randomIndex = Math.floor(Math.random() * times.length);
  console.log(randomIndex);
  var selectedRandomTimeText = times[randomIndex];
  outputParagraph.innerText = "My cat " + incUserInput + "s " + selectedRandomTimeText;
}

function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randOutputColor = "rgb("+randR+","+randG+","+randB+")";
  outputParagraph.style.backgroundColor = randOutputColor;
}

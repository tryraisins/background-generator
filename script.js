//GLOBAL VARIABLE DECLARATION

var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var button = document.getElementById("button");

//CONVERT HEX COLOR CODE TO RGB
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return "rgb(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ")";
  }
  throw new Error("Bad Hex");
}

// //MATCH BACKGROUND WITH INITAL INPUT VALUES
// function getColor() {
//   var word =
//     "linear-gradient(to right, " + color1.value + " , " + color2.value + " )";
//   document.body.style.background = word;

//   var m1 = hexToRgbA(color1.value);
//   var m2 = hexToRgbA(color2.value);
//   label1.textContent = m1;
//   label2.textContent = m2;
//   css.appendChild(document.createTextNode(word));
// }

//SET BACKGROUND TO INPUT VALUES
function setGradient() {
  var word =
    "linear-gradient(to right, " + color1.value + " , " + color2.value + " )";
  document.body.style.background = word;
  var m1 = hexToRgbA(color1.value);
  var m2 = hexToRgbA(color2.value);
  label1.textContent = m1;
  label2.textContent = m2;
}

//GENERATE RANDOM NUMBER BETWEEN 0 AND 256
function randomColorCode() {
  var num = Math.floor(Math.random() * 256);
  return num;
}

//CREATE A 3 ITEM ARRAY
function assignCode() {
  var r = randomColorCode();
  var g = randomColorCode();
  var b = randomColorCode();
  var rgb = [r, g, b];

  return rgb;
}

//CONVERT NUMBER BETWEEN 0 AND 256 TO HEXADECIMAL
function assignIndividualHEX(rgb) {
  var hex = Number(rgb).toString(16);

  if (hex.length < 2) {
    hex = "0" + hex;
  }

  return hex;
}

//CONVERT 3 ITEM ARRAY TO HEXCODE
function assignCodeHEX(a, b, c) {
  var red = assignIndividualHEX(a);
  var green = assignIndividualHEX(b);
  var blue = assignIndividualHEX(c);
  code = "#" + red + green + blue;

  return code;
}

//CONVERT 3 ITEM ARRAY TO RGB()
function assignCodeRGB(a, b, c) {
  var rgbcode = "rgb(" + a + "," + b + "," + c + ")";

  return rgbcode;
}

function randomColor2RGB() {
  col2 = assignCodeRGB();
  return col2;
}
function randomColor() {
  var colour1 = assignCode();
  var colour2 = assignCode();
  var colour1val = assignCodeRGB.apply(this, colour1);
  var colour2val = assignCodeRGB.apply(this, colour2);
  var word =
    "linear-gradient(to right, " + colour1val + " , " + colour2val + " )";
  document.body.style.background = word;
  color1.value = assignCodeHEX.apply(this, colour1);
  color2.value = assignCodeHEX.apply(this, colour2);
  label1.textContent = colour1val;
  label2.textContent = colour2val;
}
window.onload = randomColor();
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColor);

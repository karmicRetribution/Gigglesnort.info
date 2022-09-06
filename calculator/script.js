import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

// Let's make a Calculator! //

function App() {
  const [currentEntry, setCurrent] = useState([0]);
  const [prevEntry, setPrev] = useState([]);

  function zeroPress() {
    if (currentEntry.length == 1 && currentEntry[0] == 0) {
      return;
    } else if (prevEntry[prevEntry.length - 1] == "=") {
      return setCurrent([0]), setPrev([]);
    } else {
      return setCurrent([...currentEntry, 0]);
    }
  }

  function numPress(a) {
    if (currentEntry[0] == 0) {
      let newEntry = currentEntry.slice(1);
      return setCurrent([...newEntry, Number.parseInt(a)]);
    } else if (prevEntry[prevEntry.length - 1] == "=") {
      return setCurrent([Number.parseInt(a)]), setPrev([]);
    } else {
      return setCurrent([...currentEntry, Number.parseInt(a)]);
    }
  }

  function operatorPress(b) {
    if (prevEntry[prevEntry.length - 1] == "=") {
      return setPrev([...currentEntry, b]);
    } else if ((prevEntry[prevEntry.length - 1] == "-" && prevEntry[prevEntry.length - 2] == "/" || prevEntry[prevEntry.length - 1] == "-" && prevEntry[prevEntry.length - 2] == "*" || prevEntry[prevEntry.length - 1] == "-" && prevEntry[prevEntry.length - 2] == "+") && currentEntry.length == 0) {
      let subEntry = prevEntry.slice(0, -2);
      return setPrev([...subEntry, b]);
    } else if ((prevEntry[prevEntry.length - 1] == "/" || prevEntry[prevEntry.length - 1] == "*" || prevEntry[prevEntry.length - 1] == "+") && currentEntry.length == 0) {
      let oppEntry = prevEntry.slice(0, -1);
      return setPrev([...oppEntry, b]);
    } else {
      return setPrev([...prevEntry, ...currentEntry, b]);
    }
  }
  function minusPress() {
    return setPrev([...prevEntry, ...currentEntry, "-"]);
  }

  function dotPress() {
    if (currentEntry.includes(".")) {
      return;
    } else if (prevEntry[prevEntry.length - 1] == "=") {
      return setCurrent([...currentEntry, "."]), setPrev([]);
    } else {
      return setCurrent([...currentEntry, "."]);
    }
  }

  function backPress() {
    let backEntry = currentEntry.slice(0, -1);
    if (prevEntry[prevEntry.length - 1] == "=") {
      return setCurrent([...backEntry]), setPrev([]);
    } else {
      return setCurrent([...backEntry]);
    }
  }

  // Glitch Effects //
  function addGlitch() {
    var gltch = document.getElementById('glitchArea');
    gltch.classList.add('glitchAnimate');
    setTimeout(function () {
      gltch.classList.remove('glitchAnimate');
    }, 500);
  }

  function equalPress() {
    let equation = prevEntry.concat(currentEntry);
    function answer() {
      if (Number.isInteger(equation[equation.length - 1])) {
        return equation.join('');
      } else {
        return equation.slice(0, -1).join('');
      }
    };
    let result = [math.round(math.evaluate(answer()), 12)];
    function updateTop() {
      if (equation[equation.length - 1] == "/" || equation[equation.length - 1] == "*" || equation[equation.length - 1] == "-" || equation[equation.length - 1] == "+") {
        let oppEntry = equation.slice(0, -1);
        return setPrev([...oppEntry, "="]);
      } else {
        return setPrev([...equation, "="]);
      }
    }
    let resultString = result.toString(10);
    return answer(), updateTop(), setCurrent(resultString.split("")), addGlitch();
  }

  console.log("currentEntry:", currentEntry, "prevEntry:", prevEntry);

  return /*#__PURE__*/(
    React.createElement("div", { id: "app-box" }, /*#__PURE__*/
    React.createElement("div", { id: "prev" }, prevEntry), /*#__PURE__*/
    React.createElement("div", { id: "display" }, currentEntry), /*#__PURE__*/
    React.createElement("button", { id: "clear", onClick: () => {setCurrent([0]);setPrev([]);}, className: "calcButton", type: "button" }, "CE"), /*#__PURE__*/
    React.createElement("button", { id: "backspace", onClick: backPress, className: "calcButton", type: "button" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-left-long" })), /*#__PURE__*/
    React.createElement("button", { id: "divide", onClick: () => {operatorPress("/");return setCurrent([]);}, className: "calcButton", type: "button" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-divide" })), /*#__PURE__*/
    React.createElement("button", { id: "multiply", onClick: () => {operatorPress("*");return setCurrent([]);}, className: "calcButton", type: "button" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-xmark" })), /*#__PURE__*/
    React.createElement("button", { id: "seven", onClick: () => numPress(7), className: "calcButton", type: "button" }, "7"), /*#__PURE__*/
    React.createElement("button", { id: "eight", onClick: () => numPress(8), className: "calcButton", type: "button" }, "8"), /*#__PURE__*/
    React.createElement("button", { id: "nine", onClick: () => numPress(9), className: "calcButton", type: "button" }, "9"), /*#__PURE__*/
    React.createElement("button", { id: "subtract", onClick: () => {minusPress();return setCurrent([]);}, className: "calcButton", type: "button" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-minus" })), /*#__PURE__*/
    React.createElement("button", { id: "four", onClick: () => numPress(4), className: "calcButton", type: "button" }, "4"), /*#__PURE__*/
    React.createElement("button", { id: "five", onClick: () => numPress(5), className: "calcButton", type: "button" }, "5"), /*#__PURE__*/
    React.createElement("button", { id: "six", onClick: () => numPress(6), className: "calcButton", type: "button" }, "6"), /*#__PURE__*/
    React.createElement("button", { id: "add", onClick: () => {operatorPress("+");return setCurrent([]);}, className: "calcButton", type: "button" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-plus" })), /*#__PURE__*/
    React.createElement("button", { id: "one", onClick: () => numPress(1), className: "calcButton", type: "button" }, "1"), /*#__PURE__*/
    React.createElement("button", { id: "two", onClick: () => numPress(2), className: "calcButton", type: "button" }, "2"), /*#__PURE__*/
    React.createElement("button", { id: "three", onClick: () => numPress(3), className: "calcButton", type: "button" }, "3"), /*#__PURE__*/
    React.createElement("button", { id: "zero", onClick: zeroPress, className: "calcButton", type: "button" }, "0"), /*#__PURE__*/
    React.createElement("button", { id: "decimal", onClick: dotPress, className: "calcButton", type: "button" }, "."), /*#__PURE__*/
    React.createElement("button", { id: "equals", onClick: equalPress, className: "calcButton", type: "button" }, "=")));

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("page1"));



// Fancy Header //

particlesJS("headContent",
{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": false,
        "value_area": 400 } },

    "color": {
      "value": "#78C043" },

    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000" },

      "polygon": {
        "nb_sides": 5 },

      "image": {
        "src": "img/github.svg",
        "width": 10,
        "height": 10 } },


    "opacity": {
      "value": 0.75,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.25,
        "sync": false } },


    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 1,
        "sync": false } },


    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#42C8F4",
      "opacity": 0.6,
      "width": 1.2 },

    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 300,
        "rotateY": 600 } } },

  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse" },

      "onclick": {
        "enable": false,
        "mode": "push" },

      "resize": false },

    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1 } },


      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3 },

      "repulse": {
        "distance": 200,
        "duration": 0.4 },

      "push": {
        "particles_nb": 4 },

      "remove": {
        "particles_nb": 2 } } },

  "retina_detect": true });

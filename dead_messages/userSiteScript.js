// Random Log Number //

function randSeed (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createLog () {
  var rs = randSeed(11111, 99999999);
  document.getElementById('log').innerHTML = rs;
  document.getElementById('hiddenlog').value = rs;
}

function buttonClick() {
  var end = document.getElementById('complete');
    end.style.visibility = "visible";  
}

window.addEventListener('load', createLog);
window.addEventListener('submit', createLog)

// Slideshow functions //

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("page");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Glitch Effects //

function addGlitch() {
  var gltch = document.getElementById('glitchArea');
  gltch.classList.add('glitchAnimate');
  setTimeout(function() {
    plusSlides(1);
    gltch.classList.remove('glitchAnimate');
  }, 500);
}

function minusGlitch() {
  var gltch = document.getElementById('glitchArea');
  gltch.classList.add('glitchAnimate');
  setTimeout(function() {
    plusSlides(-1);
    gltch.classList.remove('glitchAnimate');
  }, 500);
}

function prettyGlitch() {
  var gltch = document.getElementById('glitchArea');
  gltch.classList.add('glitchAnimate');
  setTimeout(function() {
    gltch.classList.remove('glitchAnimate');
  }, 500);
}

// Fancy Header //

particlesJS ("headContent", 
{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": false,
        "value_area": 400
      }
    },
    "color": {
      "value": "#42C8F4"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 10,
        "height": 10
      }
    },
    "opacity": {
      "value": 0.75,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.25,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#78C043",
      "opacity": 0.6,
      "width": 1.2
    },
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
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
} 
);
// it scales really really ugly, so: //

window.addEventListener('resize', particlesJS);

// SeerOfVoid and other URL appendices //

function htmlTag () {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("seerOfVoid") == "true") {
    document.documentElement.setAttribute("data-seerOf", "void");
  }
}
window.addEventListener('load', htmlTag);

// There are many ways to pick a DOM node; here we get the form itself and the input
// box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];
const sessionID = document.getElementById('sessionID');
const messenger = document.getElementById('messenger');
const chathandle = document.getElementById('chathandle');
const bugText = document.getElementById('bugText');
const sessionIDError = document.querySelector('#sessError');
const messengerError = document.querySelector('#messError');
const chathandleError = document.querySelector('#chatError');
const bugTextError = document.querySelector('#bugError');
const noError = document.querySelector('#thankYou');

sessionID.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (sessionID.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    sessionIDError.textContent = ''; // Reset the content of the message
    sessionIDError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});
messenger.addEventListener('input', function (event) {
  if (messenger.validity.valid) {
    messengerError.textContent = '';
    messengerError.className = 'error';
  } else {
    showError();
  }
});
chathandle.addEventListener('input', function (event) {
  if (chathandle.validity.valid) {
    chathandleError.textContent = '';
    chathandleError.className = 'error';
  } else {
    showError();
  }
});
bugText.addEventListener('input', function (event) {
  if (bugText.validity.valid) {
    bugTextError.textContent = '';
    bugTextError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the field is valid, we let the form submit

  if(!sessionID.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  else if(!messenger.validity.valid) {
    showError();
    event.preventDefault();
  }
  else if(!chathandle.validity.valid) {
    showError();
    event.preventDefault();
  }
  else if(!bugText.validity.valid) {
    showError();
    event.preventDefault();
  }
  else {
    noError.textContent = 'Thank you for submitting your bug report. If the support team has any questions, we will contact you for follow-up.';
  }
});

function showError() {
  if(sessionID.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    sessionIDError.textContent = 'You must enter a session ID.';
  } else if(sessionID.validity.typeMismatch) {
    // If the field doesn't contain the correct format
    // display the following error message.
    sessionIDError.textContent = 'Entered value needs to be a valid session ID.';
  }
  if(messenger.validity.valueMissing) {
    messengerError.textContent = 'You must enter a messaging program.';
  }
  if(chathandle.validity.valueMissing) {
    chathandleError.textContent = 'You must enter your chathandle.';
  }
  if(bugText.validity.valueMissing) {
    bugTextError.textContent = 'Why would you even try to submit without typing up your bug report? Stop wasting our time.';
  }
}
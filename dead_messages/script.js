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
window.addEventListener('submit', createLog);

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

window.onresize = particlesJS;

// SeerOfVoid and other URL appendices //

function htmlTag () {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("seerOfVoid") == "true") {
    document.documentElement.setAttribute("data-seerOf", "void");
  }
}
window.addEventListener('load', htmlTag);

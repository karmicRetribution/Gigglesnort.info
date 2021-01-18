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

// Fancy Particles //

particlesJS ("particleWeb", 
{
  "particles": {
    "number": {
      "value": 113,
      "density": {
        "enable": false,
        "value_area": 800
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
        "width": 100,
        "height": 100
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
        "speed": 15,
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
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
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
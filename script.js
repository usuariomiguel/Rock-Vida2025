window.addEventListener('load',function () {
  ScrollReveal().reveal('.header', { delay: 500 });
  ScrollReveal().reveal('.heroTextMove', { delay: 700 });
  ScrollReveal().reveal('.hero', { delay: 900 });
  ScrollReveal().reveal('.about', { delay: 500 });
  ScrollReveal().reveal('.aboutContainer--first', { delay: 500 });
  ScrollReveal().reveal('.aboutContainer--second', { delay: 650 });
  ScrollReveal().reveal('.aboutContainer--third', { delay: 800 });
  ScrollReveal().reveal('.aboutContainer--fourth', { delay: 500 });
  ScrollReveal().reveal('.aboutContainer--fifth', { delay: 650 });
  ScrollReveal().reveal('.aboutContainer--sixth', { delay: 800 });  
  ScrollReveal().reveal('#quotesBox', { delay: 500 });
  ScrollReveal().reveal('#quotesBox2', { delay: 700 });
  ScrollReveal().reveal('#quotesBox3', { delay: 900 });
  ScrollReveal().reveal('.faqContainer--first', { delay: 500 });
  ScrollReveal().reveal('.faqContainer--second', { delay: 700 });
  ScrollReveal().reveal('.faqContainer--third', { delay: 500 });
  ScrollReveal().reveal('.faqContainer--fourth', { delay: 700 });
  ScrollReveal().reveal('.input--name', { delay: 500 });
  ScrollReveal().reveal('.input--email', { delay: 650 });
  ScrollReveal().reveal('.input--asunto', { delay: 800 });
  ScrollReveal().reveal('.textarea', { delay: 950 });
  ScrollReveal().reveal('.aside', { delay: 500 });
  ScrollReveal().reveal('.footerContainer', { delay: 500 });


  const quotes = [
    {
      text: "Participar en este torneo de ajedrez ha sido una experiencia única, donde no solo pusimos a prueba nuestra mente, sino también nuestras habilidades estratégicas.",
      author: "Carlos Sánchez",
      img: 'scr=""'
    },
    {
      text: "El ajedrez no es solo un juego, es un desafío constante que nos enseña a pensar y tomar decisiones bajo presión. Gracias por esta maravillosa oportunidad.",
      author: "Ana López",
      img: 'scr=""'
    },
    {
      text: "El torneo de ping pong fue una oportunidad increíble para demostrar nuestras habilidades, pero sobre todo, para disfrutar del trabajo en equipo y la sana competencia.",
      author: "Luis Martín",
      img: 'scr=""'
    }
  ];
  const quotes2 = [
    {
      text: "El campamento de verano fue una experiencia increíble, llena de aprendizajes, nuevas amistades y momentos que siempre llevaré conmigo.",
      author: "Clara Martínez",
      img: 'scr=""'
    },
    {
      text: "Gracias a este torneo de ping pong, pudimos medir nuestras destrezas, pero más que nada, compartimos momentos que nos fortalecieron como grupo.",
      author: "Miguel Cantos",
      img: 'scr=""'
    },
    {
      text: "El arte terapia fue una experiencia transformadora que me ayudó a explorar mi creatividad mientras trabajaba en mi bienestar emocional.",
      author: "José Rodríguez",
      img: 'scr=""'
    }
  ];

  const quotes3 = [
    {
      text: "El campamento de verano fue una experiencia increíble, llena de aprendizajes, nuevas amistades y momentos que siempre llevaré conmigo.",
      author: "Clara Martínez",
      img: 'scr=""'
    },
    {
      text: "Gracias a este torneo de ping pong, pudimos medir nuestras destrezas, pero más que nada, compartimos momentos que nos fortalecieron como grupo.",
      author: "Miguel Cantos",
      img: 'scr=""'
    },
    {
      text: "El arte terapia fue una experiencia transformadora que me ayudó a explorar mi creatividad mientras trabajaba en mi bienestar emocional.",
      author: "José Rodríguez",
      img: 'scr=""'
    }
  ];
  
  let currentIndex = 0;
  
  // Función para mostrar la cita actual
  function showQuote(index) {
    document.getElementById("quotesParagraph1").textContent = `${quotes[index].text}`;
    document.getElementById("quotesName1").textContent = `${quotes[index].author}`;
  }

  function showQuote2(index) {
    document.getElementById("quotesParagraph2").textContent = `${quotes2[index].text}`;
    document.getElementById("quotesName2").textContent = `${quotes2[index].author}`;
  }

  function showQuote3(index) {
    document.getElementById("quotesParagraph3").textContent = `${quotes3[index].text}`;
    document.getElementById("quotesName3").textContent = `${quotes3[index].author}`;
  }
  
  // Función para mostrar la siguiente cita
  function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length; // Cambia al siguiente índice, y si llega al final, vuelve al inicio
    showQuote(currentIndex);
    showQuote2(currentIndex);
    showQuote3(currentIndex);
  }
  
  // Función para mostrar la cita anterior
  function previousQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length; // Cambia al índice anterior, y si está al inicio, vuelve al final
    showQuote(currentIndex);
    showQuote2(currentIndex);
    showQuote3(currentIndex);
  }
  
  // Cambio automático de cita cada 5 segundos
  setInterval(nextQuote, 3000); // 5000ms = 5 segundos
  
  // Mostrar la primera cita al cargar la página
  showQuote(currentIndex);
  showQuote2(currentIndex);
  showQuote3(currentIndex);


  const hero = document.getElementById("hero");
  

// Lista de imágenes para el fondo
const images = [
  'url("https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:16x9/messi-1805.jpg")',
  'url("https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg")',
  'url("https://estaticos-cdn.prensaiberica.es/clip/2bc96e60-980d-4e41-8061-2cf8e5aedc77_alta-libre-aspect-ratio_default_0.jpg")'
];

let currentIndex1 = 0;

// Función para cambiar la imagen de fondo
function changeBackground() {
  hero.style.backgroundImage = images[currentIndex1];
  currentIndex1 = (currentIndex1 + 1) % images.length;
}

// Cambiar la imagen de fondo cada 5 segundos
setInterval(changeBackground, 5000);

// Iniciar el cambio de fondo inmediatamente
changeBackground();



})
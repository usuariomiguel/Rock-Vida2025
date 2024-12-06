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
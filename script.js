const quotes = [
    {
      text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
      author: "John Lennon",
      img: 'scr=""'
    },
    {
      text: "El único modo de hacer un gran trabajo es amar lo que haces.",
      author: "Steve Jobs",
      img: 'scr=""'
    },
    {
      text: "La felicidad no es algo hecho. Viene de tus propias acciones.",
      author: "Dalai Lama",
      img: 'scr=""'
    }
  ];
  const quotes2 = [
    {
      text: "La felicidad no es algo hecho. Viene de tus propias acciones.",
      author: "John Lennon",
      img: 'scr=""'
    },
    {
      text: "La felicidad no es algo hecho. Viene de tus propias accioneso. Viene de tus propias acciones",
      author: "Steve Jobs",
      img: 'scr=""'
    },
    {
      text: "La felicidad no es algo hecho. Viene de tus propias accionesLa felicidad no es algo hecho.propias acciones",
      author: "Dalai Lama",
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
    document.getElementById("quotesName2").textContent = `${quote2[index].author}`;
  }

  function showQuote3(index) {
    document.getElementById("quotesParagraph3").textContent = `${quotes[index].text}`;
    document.getElementById("quotesName3").textContent = `${quotes[index].author}`;
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
  setInterval(nextQuote2, 3000); // 5000ms = 5 segundos
  setInterval(nextQuote3, 3000); // 5000ms = 5 segundos
  
  // Mostrar la primera cita al cargar la página
  showQuote(currentIndex);
  showQuote2(currentIndex);
  showQuote3(currentIndex);
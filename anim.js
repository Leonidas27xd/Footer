// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Mírenla el cielo encender", time:4.2 },
  { text: "Ma Belle Gislaine", time: 10 },
  { text: "Inalcanzable querer, su amor", time: 16.1 },
  { text: "Yo sé que es para mi", time:22 },
  { text: "Por las noches vendrás así vivaz", time: 32.2 },
  { text: "La reina más bella", time: 35 },
  { text: "Por aquí", time: 37 },
  { text: "Me quieres solo a mi", time: 44 },
  { text: "Siempre hay un método", time: 47.1 },
  { text: "De amar", time: 48.2 },
  { text: "Y te amo, Gislaine", time: 55 },
  { text: "El hermoso amor", time: 78.2 },
  { text: "El grandioso amor", time: 80.1 },
  { text: "Así es nuestro amor", time: 85.4 },
  { text: "Mírenla el cielo encender", time: 93.2 },
  { text: "Te amo Gislaine", time: 99.2 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
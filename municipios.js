if (screen.width < 1024) {
  var gridaprendemos = document.getElementById("container-cards-aprendemos");

  var circulosAprendemos = document.querySelectorAll(
    ".modalidad .circulos-carrusel .circulos"
  );
  var deltaX4;
  var counterAprendemos = 0;
  for (let index = 0; index < circulosAprendemos.length; index++) {
    const element = circulosAprendemos[index];
    element.addEventListener("click", () => {
      counterAprendemos = (index + 1) * 100;
      deltaX4 = 1;
      moverAprendemos(deltaX4);
    });
  }

  var containeraprendemos = document.querySelectorAll(".card-aprendemos");
  var containeraprendemosMath = containeraprendemos.length * 100;

  circulosAprendemos[0].style.border = "2px solid #50b37e";

  gridaprendemos.style.width = containeraprendemosMath + "%";

  var startX4; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart4(event) {
    startX4 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd4(event) {
    var endX4 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX4 = endX4 - startX4; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX4) > 80) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverAprendemos(deltaX4);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverAprendemos(deltaX4) {
    for (let index = 0; index < circulosAprendemos.length; index++) {
      const element = circulosAprendemos[index];
      circulosAprendemos[index].style.border = "none";
    }
    if (deltaX4 > 0) {
      if (counterAprendemos == 0) {
        counterAprendemos = containeraprendemosMath - 100;
        circulosAprendemos[circulosAprendemos.length - 1].style.border =
          "2px solid #50b37e";
        circulosAprendemos[0].style.border = "none";
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";
      } else {
        counterAprendemos = counterAprendemos -= 100;
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";

        circulosAprendemos[counterAprendemos / 100].style.border = "none";
        circulosAprendemos[counterAprendemos / 100].style.border =
          "2px solid #50b37e";
      }
    } else {
      if (counterAprendemos == containeraprendemosMath - 100) {
        counterAprendemos = 0;
        circulosAprendemos[counterAprendemos / 100].style.border =
          "2px solid #50b37e";
        circulosAprendemos[circulosAprendemos.length - 1].style.border = "none";
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";
      } else {
        counterAprendemos = counterAprendemos += 100;
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";
        circulosAprendemos[counterAprendemos / 100 - 1].style.border = "none";
        circulosAprendemos[counterAprendemos / 100].style.border =
          "2px solid #50b37e";
      }
    }
  }

  // Agregar controladores de eventos táctiles al elemento
  gridaprendemos.addEventListener("touchstart", handleTouchStart4, false);
  gridaprendemos.addEventListener("touchend", handleTouchEnd4, false);
}

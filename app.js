
$(document).ready(function() {
  $('#formulario').submit(function(e) {
      e.preventDefault(); // Evitar que se recargue la página

      // Enviar la solicitud AJAX
      $.ajax({
          type: 'POST',
          url: 'registro.php',
          data: $(this).serialize(),
          dataType: 'json',
          success: function(response) {
              if (response.success) {
                  $('#mensaje').text(response.message);
              } else {
                  $('#mensaje').text('Error: ' + response.message);
              }
          },
          error: function() {
              $('#mensaje').text('Error de conexión');
          }
});
  });
});

if (screen.width > 900) {
  var gridtarjetas = document.getElementById("container-flex");

  var circulosModeloBanner = document.querySelectorAll(
    ".container-banner-principal .circulos-carrusel-pc .circulos"
  );
  console.log(circulosModeloBanner);

  var counter = 0;
  for (let index = 0; index < circulosModeloBanner.length; index++) {
    console.log(circulosModeloBanner[index]);
    circulosModeloBanner[index].addEventListener("click", () => {
      console.log("gps");
      counter = (index + 1) * 100;
      deltaX = 1;
      console.log("entro");
      moverBanner(index + 1);
    });
  }

  var containertajeta = document.querySelectorAll(".flex-tarjetas");
  var containertajetaMath = containertajeta.length * 100;

  circulosModeloBanner[0].style.border = "2px solid #50b37e";

  function moverBanner(deltaX) {
    console.log("entri");
    for (let index = 0; index < circulosModeloBanner.length; index++) {
      const element = circulosModeloBanner[index];
      circulosModeloBanner[index].style.border = "none";
    }
    if (deltaX > 0) {
      if (counter == 0) {
        counter = containertajetaMath - 100;
        circulosModeloBanner[circulosModeloBanner.length - 1].style.border =
          "2px solid #50b37e";
        circulosModeloBanner[0].style.border = "none";
        gridtarjetas.style.marginLeft = "-" + counter + "%";
      } else {
        counter = counter -= 100;
        gridtarjetas.style.marginLeft = "-" + counter + "%";

        circulosModeloBanner[counter / 100].style.border = "none";
        circulosModeloBanner[counter / 100].style.border = "2px solid #50b37e";
      }
    } else {
      if (counter == containertajetaMath - 100) {
        counter = 0;
        circulosModeloBanner[counter / 100].style.border = "2px solid #50b37e";
        circulosModeloBanner[circulosModeloBanner.length - 1].style.border =
          "none";
        gridtarjetas.style.marginLeft = "-" + counter + "%";
      } else {
        counter = counter += 100;
        gridtarjetas.style.marginLeft = "-" + counter + "%";
        circulosModeloBanner[counter / 100 - 1].style.border = "none";
        circulosModeloBanner[counter / 100].style.border = "2px solid #50b37e";
      }
    }
  }
}
if (screen.width < 900) {
  var gridtarjetas = document.getElementById("grid-tarjetas-movil");

  var circulosModeloBanner = document.querySelectorAll(
    ".container-banner-principal .circulos-carrusel-movil .circulos"
  );
  var deltaX;
  var counter = 0;
  for (let index = 0; index < circulosModeloBanner.length; index++) {
    const element = circulosModeloBanner[index];
    element.addEventListener("click", () => {
      counter = (index + 1) * 100;
      deltaX = 1;
      moverBanner(deltaX);
    });
  }

  var containertajeta = document.querySelectorAll(
    ".grid-tarjetas-movil .container-tajeta"
  );
  var containertajetaMath = containertajeta.length * 100;

  circulosModeloBanner[0].style.border = "2px solid #50b37e";

  gridtarjetas.style.width = containertajetaMath + "%";

  var startX; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart(event) {
    startX = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd(event) {
    var endX = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX = endX - startX; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX) > 100) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverBanner(deltaX);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverBanner(deltaX) {
    for (let index = 0; index < circulosModeloBanner.length; index++) {
      const element = circulosModeloBanner[index];
      circulosModeloBanner[index].style.border = "none";
    }
    if (deltaX > 0) {
      if (counter == 0) {
        counter = containertajetaMath - 100;
        circulosModeloBanner[circulosModeloBanner.length - 1].style.border =
          "2px solid #50b37e";
        circulosModeloBanner[0].style.border = "none";
        gridtarjetas.style.marginLeft = "-" + counter + "%";
      } else {
        counter = counter -= 100;
        gridtarjetas.style.marginLeft = "-" + counter + "%";

        circulosModeloBanner[counter / 100].style.border = "none";
        circulosModeloBanner[counter / 100].style.border = "2px solid #50b37e";
      }
    } else {
      if (counter == containertajetaMath - 100) {
        counter = 0;
        circulosModeloBanner[counter / 100].style.border = "2px solid #50b37e";
        circulosModeloBanner[circulosModeloBanner.length - 1].style.border =
          "none";
        gridtarjetas.style.marginLeft = "-" + counter + "%";
      } else {
        counter = counter += 100;
        gridtarjetas.style.marginLeft = "-" + counter + "%";
        circulosModeloBanner[counter / 100 - 1].style.border = "none";
        circulosModeloBanner[counter / 100].style.border = "2px solid #50b37e";
      }
    }
  }
  var myElement = document.getElementById("grid-tarjetas-movil");

  // Agregar controladores de eventos táctiles al elemento
  myElement.addEventListener("touchstart", handleTouchStart, false);
  myElement.addEventListener("touchend", handleTouchEnd, false);

  /////////////////////////////////////////////////////////////

  var gridcrecimiento = document.getElementById("container-cards-crecimiento");
  var counterformativo = 0;
  var deltaX2;
  var circulosModelo = document.querySelectorAll(
    ".modelo-formativo #circulos-carrusel .circulos"
  );

  for (let index = 0; index < circulosModelo.length; index++) {
    const element = circulosModelo[index];
    element.addEventListener("click", () => {
      counterformativo = (index + 1) * 100;
      deltaX2 = 1;
      moverFormativo(deltaX2);
    });
  }

  var containercrecimiento = document.querySelectorAll(
    "#container-cards-crecimiento .card-crecimiento"
  );

  var containercrecimientoMath = containercrecimiento.length * 100;

  circulosModelo[0].style.border = "none";
  circulosModelo[0].style.backgroundColor = "#082f23";
  gridcrecimiento.style.width = containercrecimientoMath + "%";

  var startX2; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart2(event) {
    startX2 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd2(event) {
    var endX2 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX2 = endX2 - startX2; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX2) > 100) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverFormativo(deltaX2);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverFormativo(deltaX2) {
    for (let index = 0; index < circulosModelo.length; index++) {
      const element = circulosModelo[index];
      circulosModelo[index].style.border = "3px solid #082f23";
      circulosModelo[index].style.backgroundColor = "white";
    }
    if (deltaX2 > 0) {
      //movimiento hacia atras
      if (counterformativo == 0) {
        counterformativo = containercrecimientoMath - 100;
        circulosModelo[circulosModelo.length - 1].style.border = "none";
        circulosModelo[circulosModelo.length - 1].style.backgroundColor =
          "#082f23";
        circulosModelo[0].style.backgroundColor = "white";
        circulosModelo[0].style.border = "3px solid #082f23";
        gridcrecimiento.style.marginLeft = "-" + counterformativo + "%";
      } else {
        counterformativo = counterformativo -= 100;
        gridcrecimiento.style.marginLeft = "-" + counterformativo + "%";

        circulosModelo[counterformativo / 100].style.border =
          "3px solid #082f23";
        circulosModelo[counterformativo / 100].style.backgroundColor =
          "#082f23";
        circulosModelo[counterformativo / 100].style.border = "none";
      }
    }
    //movimiento hacia adelante
    else {
      if (counterformativo == containercrecimientoMath - 100) {
        counterformativo = 0;
        circulosModelo[counterformativo / 100].style.border = "none";
        circulosModelo[counterformativo / 100].style.backgroundColor =
          "#082f23";
        circulosModelo[circulosModelo.length - 1].style.border =
          "3px solid #082f23";
        circulosModelo[circulosModelo.length - 1].style.backgroundColor =
          "#white";
        gridcrecimiento.style.marginLeft = "-" + counterformativo + "%";
      } else {
        counterformativo = counterformativo += 100;
        gridcrecimiento.style.marginLeft = "-" + counterformativo + "%";
        circulosModelo[counterformativo / 100 - 1].style.border =
          "3px solid #082f23";
        circulosModelo[counterformativo / 100].style.border = "none";
        circulosModelo[counterformativo / 100].style.backgroundColor =
          "#082f23";
      }
    }
  }
  var myElement2 = document.getElementById("container-cards-crecimiento");

  // Agregar controladores de eventos táctiles al elemento
  gridcrecimiento.addEventListener("touchstart", handleTouchStart2, false);
  gridcrecimiento.addEventListener("touchend", handleTouchEnd2, false);

  ////////////////////////////////////////////////////////////////////////////////

  var gridcrecimiento2 = document.getElementById(
    "container-cards-crecimiento2"
  );
  var counterformativo2 = 0;
  var deltaX3;
  var circulosModelo2 = document.querySelectorAll(
    ".modelo-formativo #circulos-carrusel2 .circulos"
  );

  for (let index = 0; index < circulosModelo2.length; index++) {
    const element = circulosModelo2[index];
    element.addEventListener("click", () => {
      counterformativo2 = (index + 1) * 100;
      deltaX3 = 1;
      moverFormativo2(deltaX3);
    });
  }

  var containercrecimiento2 = document.querySelectorAll(
    "#container-cards-crecimiento2 .card-crecimiento"
  );

  var containercrecimiento2Math = containercrecimiento2.length * 100;
  console.log(circulosModelo2[0]);
  circulosModelo2[0].style.border = "none";
  circulosModelo2[0].style.backgroundColor = "#082f23";
  gridcrecimiento2.style.width = containercrecimiento2Math + "%";

  var startX3; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart3(event) {
    startX3 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd3(event) {
    var endX3 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX3 = endX3 - startX3; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX3) > 100) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverFormativo2(deltaX3);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverFormativo2(deltaX3) {
    for (let index = 0; index < circulosModelo2.length; index++) {
      const element = circulosModelo2[index];
      circulosModelo2[index].style.border = "3px solid #082f23";
      circulosModelo2[index].style.backgroundColor = "white";
    }
    if (deltaX3 > 0) {
      if (counterformativo2 == 0) {
        counterformativo2 = containercrecimiento2Math - 100;
        circulosModelo2[circulosModelo2.length - 1].style.border = "none";
        circulosModelo2[circulosModelo2.length - 1].style.backgroundColor =
          "#082f23";
        circulosModelo2[0].style.backgroundColor = "white";
        circulosModelo2[0].style.border = "3px solid #082f23";
        gridcrecimiento2.style.marginLeft = "-" + counterformativo2 + "%";
      } else {
        counterformativo2 = counterformativo2 -= 100;
        gridcrecimiento2.style.marginLeft = "-" + counterformativo2 + "%";

        circulosModelo2[counterformativo2 / 100].style.border =
          "3px solid #082f23";
        circulosModelo2[counterformativo2 / 100].style.backgroundColor =
          "#082f23";
        circulosModelo2[counterformativo2 / 100].style.border = "none";
      }
    } else {
      if (counterformativo2 == containercrecimiento2Math - 100) {
        counterformativo2 = 0;
        circulosModelo2[counterformativo2 / 100].style.border = "none";
        circulosModelo2[counterformativo2 / 100].style.backgroundColor =
          "#082f23";
        circulosModelo2[circulosModelo2.length - 1].style.border =
          "3px solid #082f23";
        circulosModelo2[circulosModelo2.length - 1].style.backgroundColor =
          "#white";
        gridcrecimiento2.style.marginLeft = "-" + counterformativo2 + "%";
      } else {
        counterformativo2 = counterformativo2 += 100;
        gridcrecimiento2.style.marginLeft = "-" + counterformativo2 + "%";
        circulosModelo2[counterformativo2 / 100 - 1].style.border =
          "3px solid #082f23";
        circulosModelo2[counterformativo2 / 100].style.border = "none";
        circulosModelo2[counterformativo2 / 100].style.backgroundColor =
          "#082f23";
      }
    }
  }
  // Agregar controladores de eventos táctiles al elemento
  gridcrecimiento2.addEventListener("touchstart", handleTouchStart3, false);
  gridcrecimiento2.addEventListener("touchend", handleTouchEnd3, false);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gridaprendemos = document.getElementById("container-cards-aprendemos");

  var circulosAprendemos = document.querySelectorAll(
    ".container-como-aprendemos .circulos-carrusel .circulos"
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

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gridEquipo = document.getElementById("container-cards-equipo");
  var counterequipo = 0;
  var deltaX5;
  var circulosEquipo = document.querySelectorAll(
    ".container-equipo .circulos-carrusel .circulos"
  );
  console.log(circulosEquipo);
  for (let index = 0; index < circulosEquipo.length; index++) {
    const element = circulosEquipo[index];
    element.addEventListener("click", () => {
      counterequipo = (index + 1) * 100;
      deltaX5 = 1;
      moverEquipo(deltaX5);
    });
  }

  var containerEquipo = document.querySelectorAll(
    ".container-cards-equipo .card-equipo"
  );

  var containerequipoMath = containerEquipo.length * 100;
  console.log(circulosEquipo[0]);
  circulosEquipo[0].style.border = "none";
  circulosEquipo[0].style.backgroundColor = "#082f23";
  gridEquipo.style.width = containerequipoMath + "%";

  var startX5; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart5(event) {
    startX5 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd5(event) {
    var endX5 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX5 = endX5 - startX5; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX5) > 100) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverEquipo(deltaX5);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverEquipo(deltaX5) {
    for (let index = 0; index < circulosEquipo.length; index++) {
      const element = circulosEquipo[index];
      circulosEquipo[index].style.border = "3px solid #082f23";
      circulosEquipo[index].style.backgroundColor = "white";
    }
    if (deltaX5 > 0) {
      if (counterequipo == 0) {
        counterequipo = containerequipoMath - 100;
        circulosEquipo[circulosEquipo.length - 1].style.border = "none";
        circulosEquipo[circulosEquipo.length - 1].style.backgroundColor =
          "#082f23";
        circulosEquipo[0].style.backgroundColor = "white";
        circulosEquipo[0].style.border = "3px solid #082f23";
        gridEquipo.style.marginLeft = "-" + counterequipo + "%";
      } else {
        counterequipo = counterequipo -= 100;
        gridEquipo.style.marginLeft = "-" + counterequipo + "%";

        circulosEquipo[counterequipo / 100].style.border = "3px solid #082f23";
        circulosEquipo[counterequipo / 100].style.backgroundColor = "#082f23";
        circulosEquipo[counterequipo / 100].style.border = "none";
      }
    } else {
      if (counterequipo == containerequipoMath - 100) {
        counterequipo = 0;
        circulosEquipo[counterequipo / 100].style.border = "none";
        circulosEquipo[counterequipo / 100].style.backgroundColor = "#082f23";
        circulosEquipo[circulosEquipo.length - 1].style.border =
          "3px solid #082f23";
        circulosEquipo[circulosEquipo.length - 1].style.backgroundColor =
          "#white";
        gridEquipo.style.marginLeft = "-" + counterequipo + "%";
      } else {
        counterequipo = counterequipo += 100;
        gridEquipo.style.marginLeft = "-" + counterequipo + "%";
        circulosEquipo[counterequipo / 100 - 1].style.border =
          "3px solid #082f23";
        circulosEquipo[counterequipo / 100].style.border = "none";
        circulosEquipo[counterequipo / 100].style.backgroundColor = "#082f23";
      }
    }
  }
  // Agregar controladores de eventos táctiles al elemento
  gridEquipo.addEventListener("touchstart", handleTouchStart5, false);
  gridEquipo.addEventListener("touchend", handleTouchEnd5, false);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gridComponentes = document.getElementById("container-mision-vision");
  var counterComponents = 0;
  var deltaX6;
  var circulosComponents = document.querySelectorAll(
    ".container-components-movil .circulos-carrusel .circulos"
  );

  for (let index = 0; index < circulosComponents.length; index++) {
    const element = circulosComponents[index];
    element.addEventListener("click", () => {
      counterComponents = (index + 1) * 100;
      deltaX6 = 1;
      moverComponents(deltaX6);
    });
  }

  var containerComponent = document.querySelectorAll(
    ".container-components-movil .container-mision-vision .container-mision"
  );

  var containercomponentMath = containerComponent.length * 100;
  console.log("component" + containercomponentMath);
  circulosComponents[0].style.border = "none";
  circulosComponents[0].style.backgroundColor = "#082f23";
  gridComponentes.style.width = containercomponentMath + "%";

  var startX6; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart6(event) {
    startX6 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd6(event) {
    var endX6 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX6 = endX6 - startX6; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX6) > 100) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverComponents(deltaX6);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverComponents(deltaX6) {
    for (let index = 0; index < circulosComponents.length; index++) {
      const element = circulosComponents[index];
      circulosComponents[index].style.border = "3px solid #082f23";
      circulosComponents[index].style.backgroundColor = "white";
    }
    if (deltaX6 > 0) {
      if (counterComponents == 0) {
        counterComponents = containercomponentMath - 100;
        circulosComponents[circulosComponents.length - 1].style.border = "none";
        circulosComponents[
          circulosComponents.length - 1
        ].style.backgroundColor = "#082f23";
        circulosComponents[0].style.backgroundColor = "white";
        circulosComponents[0].style.border = "3px solid #082f23";
        gridComponentes.style.marginLeft = "-" + counterComponents + "%";
      } else {
        counterComponents = counterComponents -= 100;
        gridComponentes.style.marginLeft = "-" + counterComponents + "%";

        circulosComponents[counterComponents / 100].style.border =
          "3px solid #082f23";
        circulosComponents[counterComponents / 100].style.backgroundColor =
          "#082f23";
        circulosComponents[counterComponents / 100].style.border = "none";
      }
    } else {
      if (counterComponents == containercomponentMath - 100) {
        counterComponents = 0;
        circulosComponents[counterComponents / 100].style.border = "none";
        circulosComponents[counterComponents / 100].style.backgroundColor =
          "#082f23";
        circulosComponents[circulosComponents.length - 1].style.border =
          "3px solid #082f23";
        circulosComponents[
          circulosComponents.length - 1
        ].style.backgroundColor = "#white";
        gridComponentes.style.marginLeft = "-" + counterComponents + "%";
      } else {
        counterComponents = counterComponents += 100;
        gridComponentes.style.marginLeft = "-" + counterComponents + "%";
        circulosComponents[counterComponents / 100 - 1].style.border =
          "3px solid #082f23";
        circulosComponents[counterComponents / 100].style.border = "none";
        circulosComponents[counterComponents / 100].style.backgroundColor =
          "#082f23";
      }
    }
  }
  // Agregar controladores de eventos táctiles al elemento
  gridComponentes.addEventListener("touchstart", handleTouchStart6, false);
  gridComponentes.addEventListener("touchend", handleTouchEnd6, false);
}

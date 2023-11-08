const ingressos = [];

function highlightCard(selector) {
  var element = document.querySelector(selector);
  element.classList.toggle("card-highlight");
}

function addKeyboardEventListeners() {
  document.addEventListener(
    "keydown",
    (event) => {
      var ticket1 = document.getElementById("quinta");
      var ticket2 = document.getElementById("sexta");
      var ticket3 = document.getElementById("sabado");
      var ticket4 = document.getElementById("domingo");

      var code = event.code;

      // Conferindo se for digitado a tecla correta
      switch (code) {
        // Caso seja digitado 1 via teclado sem parte numerica
        case "Digit1":
          1;
          ticket1.classList.toggle("card-highlight");
          ticket2.classList.remove("card-highlight");
          ticket3.classList.remove("card-highlight");
          ticket4.classList.remove("card-highlight");
          break;

        // Caso seja digitado 1 via teclado com parte numerica
        case "Numpad1":
          ticket1.classList.toggle("card-highlight");
          ticket2.classList.remove("card-highlight");
          ticket3.classList.remove("card-highlight");
          ticket4.classList.remove("card-highlight");
          break;

        // Caso seja digitado 2 via teclado sem parte numerica
        case "Digit2":
          ticket1.classList.remove("card-highlight");
          ticket2.classList.toggle("card-highlight");
          ticket3.classList.remove("card-highlight");
          ticket4.classList.remove("card-highlight");
          break;

        // Caso seja digitado 2 via teclado sem parte numerica
        case "Numpad2":
          ticket1.classList.remove("card-highlight");
          ticket2.classList.toggle("card-highlight");
          ticket3.classList.remove("card-highlight");
          ticket4.classList.remove("card-highlight");
          break;

        // Caso seja digitado 3 via teclado sem parte numerica
        case "Digit3":
          ticket1.classList.remove("card-highlight");
          ticket2.classList.remove("card-highlight");
          ticket3.classList.toggle("card-highlight");
          ticket4.classList.remove("card-highlight");
          break;

        // Caso seja digitado 3 via teclado com parte numerica
        case "Numpad3":
          ticket1.classList.remove("card-highlight");
          ticket2.classList.remove("card-highlight");
          ticket3.classList.toggle("card-highlight");
          ticket4.classList.remove("card-highlight");
          break;

        // Caso seja digitado 4 via teclado sem parte numerica
        case "Digit4":
          ticket1.classList.remove("card-highlight");
          ticket2.classList.remove("card-highlight");
          ticket3.classList.remove("card-highlight");
          ticket4.classList.toggle("card-highlight");
          break;

        // Caso seja digitado 4 via teclado com parte numerica
        case "Numpad4":
          ticket1.classList.remove("card-highlight");
          ticket2.classList.remove("card-highlight");
          ticket3.classList.remove("card-highlight");
          ticket4.classList.toggle("card-highlight");
          break;
      }
    },
    false
  );
}

function selectCard(selector) {
  var element = document.querySelector(selector);
  element.classList.toggle("card-selected");
  return ingressos.includes(selector)
    ? ingressos.pop(selector)
    : ingressos.push(selector);
}

showSelectedCards = () => {
  if (ingressos.length > 0) alert("Ingressos selecionados: " + ingressos);
};

// checkKeyboardCode();
addKeyboardEventListeners();

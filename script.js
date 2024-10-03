(function () {
  var ex1_button = document.getElementById("ex1_button");
  var ex1_content = document.getElementById("ex1_content");
  ex1_button.onclick = function () {
    var tabela = [];
    for (var i = 0; i <= 9; i++) {
      tabela.push(i);
    }
    ex1_content.innerHTML = tabela.toString();
  };
});

var ex2_text = document.getElementById("ex2_text");
var ex2_content = document.getElementById("ex2_content");

ex2_text.addEventListener("input", function () {
  const input = this.value;
  let message = "";

  if (input.length > 9) {
    message = "Długoś numeru musi być równa 9";
  } else if (/[a-zA-Z]/.test(input)) {
    message = "Numer nie może zawierać liter";
  } else if (/[^0-9]/.test(input)) {
    message = "Numer nie może zawierac znaków specjalnych";
  } else {
    message = "Numer telefonu jest poprawny";
  }

  ex2_content.textContent = message;
});

var ex3_one = document.getElementById("ex3_one");
var ex3_two = document.getElementById("ex3_two");
var ex3_element = document.getElementById("ex3_element");

ex3_element.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  const element = document.getElementById(data);
  e.target.appendChild(element);
}

[ex3_one, ex3_two].forEach((container) => {
  container.addEventListener("dragover", handleDragOver);
  container.addEventListener("drop", handleDrop);
});

"use strict";

const checkb1 = document.getElementById("checkbox1");
/*const checkb2 = document.getElementById("checkbox2");
const checkb3 = document.getElementById("checkbox3");
const checkb4 = document.getElementById("checkbox4");
const checkb5 = document.getElementById("checkbox5");
const checkb6 = document.getElementById("checkbox6");
const checkb7 = document.getElementById("checkbox7");
const checkb8 = document.getElementById("checkbox8");
const checkb9 = document.getElementById("checkbox9");
const checkb10 = document.getElementById("checkbox10");*/
const btnCtr = document.querySelector("#btn--controllo");
const btnRst = document.querySelector("#btn--reset");
const paragraph = document.querySelector(".text");
const checkboxes = document.querySelectorAll(`input[name="name"]`);
const checkAll = document.getElementById("optionAll");

// reset
const check = function (checked = true) {
  checkboxes.forEach((cb) => {
    cb.checked = checked;
  });
};

const reset = function () {
  paragraph.textContent = "num di crediti è";
  check();
};

//display
const displayMessage = function (message) {
  paragraph.textContent = message;
};

//control
const getSelectedCheckboxValues = function (name) {
  let values = [];
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  const valuesNumb = values.map(Number);
  const summa = valuesNumb.reduce((el, acc) => el + acc, 0);

  return summa > 0
    ? `Hai totalizzato ${summa} CFU`
    : "Non hai selezionato alcun esame";
};

//buttons
btnCtr.addEventListener("click", () => {
  paragraph.textContent = getSelectedCheckboxValues("name");
});

btnRst.addEventListener("click", reset);

//checkall
document.getElementById("optionAll").onclick = function () {
  checkboxes.forEach((el) => {
    el.checked = this.checked;
  });
};

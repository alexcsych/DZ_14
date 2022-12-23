const INPUTS_REG_EXP = {
  "first-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  "last-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  email: /^.+@.+$/,
  "phone-number": /^\d{3}$/,
  "phone-number": /^\d{3}$/,
  "phone-number1": /^\d{4}$/,
};

const inputs = document.querySelectorAll("input");

inputs.forEach((i) => i.addEventListener("input", inputHandler));

function inputHandler(e) {
  console.dir(e.target);
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
  let valids = document.querySelectorAll(".valid");
  let invalids = document.querySelectorAll(".invalid");
  let sumbit = document.querySelector("button");
  if (valids.length === inputs.length && invalids.length === 0) {
    sumbit.disabled = false;
  } else {
    sumbit.disabled = true;
  }
}

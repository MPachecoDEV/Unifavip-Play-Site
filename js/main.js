// mobile menu //
const mobile_menu = document.querySelector(".mobile_menu");

const link = document.querySelector(".link");

mobile_menu.addEventListener("click", () => link.classList.toggle("active"));
// mobile menu //

// Validar E-mail //
const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(emailInput.value === " " || !isEmailValid(emailInput.value)) {
    alert("Email Invalido! Por favor, preencha o seu email corretamente");
    return;
  }
  form.submit();
})
// função que valida email
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.-]+@[a-zA-Z.-]+.[a-zA-Z]{2,}$/
  )

  if(emailRegex.test(email)){
    return true
  }
  return false
}
// Validar E-mail //

// dark-mode //

function darkmode() {
  var bodydark = document.body;
  bodydark.classList.toggle("dark");

  var headerdark = document.querySelector(".menu");
  headerdark.classList.toggle("dark");
  
  var linkdark = document.querySelector(".link");
  linkdark.classList.toggle("dark");

  var mobilemenudark = document.querySelector(".ul-link");
  mobilemenudark.classList.toggle("dark");

  var footerdark = document.querySelector(".rodape");
  footerdark.classList.toggle("dark");

  var bannertextodark = document.querySelector(".banner-texto");
  bannertextodark.classList.toggle("dark");
}

function darkmodeinscricao() {
  var bodydark = document.body;
  bodydark.classList.toggle("dark");

  var headerdark = document.querySelector(".menu");
  headerdark.classList.toggle("dark");

  var linkdark = document.querySelector(".link")
  linkdark.classList.toggle("dark");

  var mobilemenudark = document.querySelector(".ul-link");
  mobilemenudark.classList.toggle("dark");

  var footerdark = document.querySelector(".rodape");
  footerdark.classList.toggle("dark");

  var inscricaodark = document.querySelector(".section-inscricao");
  inscricaodark.classList.toggle("dark");
}

function darkmodesobre() {
  var bodydark = document.body;
  bodydark.classList.toggle("dark");

  var headerdark = document.querySelector(".menu")
  headerdark.classList.toggle("dark");

  var linkdark = document.querySelector(".link")
  linkdark.classList.toggle("dark");

  var mobilemenudark = document.querySelector(".ul-link")
  mobilemenudark.classList.toggle("dark");

  var footerdark = document.querySelector(".rodape")
  footerdark.classList.toggle("dark");

  var sobredark = document.querySelector(".section-sobre")
  sobredark.classList.toggle("dark");
}

function darkmodejogos() {
  var bodydark = document.body;
  bodydark.classList.toggle("dark");

  var headerdark = document.querySelector(".menu")
  headerdark.classList.toggle("dark");

  var linkdark = document.querySelector(".link")
  linkdark.classList.toggle("dark");

  var mobilemenudark = document.querySelector(".ul-link")
  mobilemenudark.classList.toggle("dark");

  var footerdark = document.querySelector(".rodape")
  footerdark.classList.toggle("dark");

  var jogosdark = document.querySelector(".section-gamepage")
  jogosdark.classList.toggle("dark")

}
// dark-mode //


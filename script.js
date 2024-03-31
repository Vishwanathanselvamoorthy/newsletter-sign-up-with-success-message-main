const emailValue = document.querySelector(".email-box");
const subscribeBtn = document.querySelector(".subscribe-button");
const dismissBtn = document.querySelector(".dismiss-button");
const errorMsg = document.querySelector(".error-message");
const successPage = document.querySelector(".success-container");
const imgPage = document.querySelector(".img-container");
const textPage = document.querySelector(".text-container");
const emailValidatorFunc = function (email) {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) {
    emailValue.classList.add("error-input-box");
    return "Valid Email Required";
  } else {
    successPage.classList.remove("hidden");
    imgPage.classList.add("hidden");
    textPage.classList.add("hidden");
    successPage.style.display = "flex";
  }
};

subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const email = emailValue.value;
  errorMsg.textContent = emailValidatorFunc(email);
});

dismissBtn.addEventListener("click", function (e) {
  e.preventDefault();
  imgPage.classList.remove("hidden");
  textPage.classList.remove("hidden");
  successPage.style.display = "none";
});

if (window.innerWidth >= 1024) {
  document.getElementById("main-img").src =
    "./assets/images/illustration-sign-up-desktop.svg";
}

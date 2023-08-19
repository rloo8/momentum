const loginBox = document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const loginBg = document.querySelector("#loginBg");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginBox.classList.add(HIDDEN_CLASSNAME);
  loginBg.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

function paintGreeting(name) {
  greeting.innerText = `${name}'s Desktop`;
  logoutBtn.innerHTML = `Log Out <strong>${name}</strong>`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  loginBg.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintGreeting(savedUsername);
}

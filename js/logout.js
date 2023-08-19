// 로그아웃 창
const btn = document.querySelector("#left");
const logoutBox = document.querySelector("#logout");
const clickBox = document.querySelector("#clickbox");

function handleLogoutBox() {
  logoutBox.classList.toggle(HIDDEN_CLASSNAME);
  clickBox.classList.toggle(HIDDEN_CLASSNAME);
}

btn.addEventListener("click", handleLogoutBox);

// 로그아웃 버튼
const logoutBtn = document.querySelector("#logoutBtn");

function handleLogout() {
  localStorage.clear();
  location.reload();
}

logoutBtn.addEventListener("click", handleLogout);

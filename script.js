// Hardcoded logins (you can edit these usernames/passwords)
const users = {
  "admin": "password123",
  "kv": "goatedgen"
};

// Login logic
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error-msg');

  if (users[user] && users[user] === pass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", user);
    window.location.href = "index.html";
  } else {
    error.textContent = "Invalid username or password.";
  }
}

// Logout logic
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

// Redirect to login if not logged in (only for index.html)
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

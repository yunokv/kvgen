const users = {
  admin: "password123",
  kv: "goatedgen",
  // add your usernames and passwords here
};

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error-msg");

  if (users[user] && users[user] === pass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", user);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid username or password.";
  }
}

// Check auth on dashboard page load
if (window.location.pathname.endsWith("dashboard.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

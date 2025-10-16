export function registerUser(user) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    return true;
  }
  return false;
}

export function logoutUser() {
  localStorage.removeItem('loggedInUser');
}

export function isLoggedIn() {
  return !!localStorage.getItem('loggedInUser');
}

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('loggedInUser'));
}

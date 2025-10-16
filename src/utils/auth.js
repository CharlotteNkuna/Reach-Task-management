// this is a file, hs functions for user management
export function registerUser(user) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || []; //fetches objects and convert it to a list/array of users
  const user = users.find((u) => u.email === email && u.password === password); //this arrow function is mapping the email to u.email with u.email === email
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
  return !!localStorage.getItem('loggedInUser'); //!! double negation is for converting the boolean to true(false + false = true)
} // a true condition to check if the user ids logged in. 

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('loggedInUser'));
}

// javascript: non blocking code

let users = ["sam", "john", "peter"];

function addUser(username, callback) {
  setTimeout(() => {
    users.push(username);
    callback();
  }, 200);
}

function getUsers() {
  setTimeout(() => {
    console.log(users);
  }, 100);
}

addUser("james", getUsers);

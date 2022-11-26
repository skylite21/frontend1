let users = ["sam", "john", "peter"];

// function addUser(username, callback) {
//   setTimeout(() => {
//     users.push(username);
//     callback();
//   }, 200);
// }

// function getUsers() {
//   setTimeout(() => {
//     console.log(users);
//   }, 100);
// }

// addUser("james", getUsers);

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(users);
      resolve(users);
    }, 100);
  });
};

function addUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(username);
      resolve();
    }, 200);
  });
}

// addUser("james").then(getUsers);

async function init() {
  await addUser("james");
  const users = await getUsers();
  console.log(users);
}
// init();

import fetch from "node-fetch";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

getData();

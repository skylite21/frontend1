function wave(name) {
  console.log("Waving: " + name);
}

function sayHello(name, callback) {
  console.log("Hello: " + name);
  callback(name);
}

// callback: olyan függvény, amelyet paraméterként átadjunk egy másik függvénynek
sayHello("John", wave);

sayHello("John", function (name) {
  console.log("Waving: " + name);
});


const myObject = {};

console.log(typeof(myObject));

myObject.alive = true;
console.log(myObject.alive);

const names = [['Peter', 'male', 23, 64], ['Kate', 'female', 12]];

const myPlayer = {
  // key : value paris
  name: 'John',
  health: 100,
  alive: true,
  shoot: function() {
    console.log('shooting!');
  },
  heal: function() {
    this.shoot();
    console.log(this.name+' is healing');
  }
}

console.log(myPlayer.name);
myPlayer.shoot();
myPlayer.name = 'Peter';
myPlayer.shoot = function () {
  console.log('hello');
}


myPlayer.shoot();
myPlayer.heal();


console.log(this);











// scope chain
global.x = 10;

const a = 3;
function first() {
  const b = 5;
  function second() {
    const c = 6;
    console.log(a, b, c, x);
  }
  second();
}

first();

const player = { name: "Peter", score: 43, shoot: function() {} };
const player2 = { name: "Kate", score: 43, shoot: function() {} };

function Cat(name) {
  return {
    name: name,
    purr: function() {
      console.log('brrrr');
    }
  }
}

const myCat = Cat('Cirmi');


// class = template a később készülő object-hez
class Player {
  // constructor: speciális metódus, (muszáj hogy ez legyen a neve)
  // nem kötelező, de ez az a metódus ami a példányosítás pillanatában 
  // lefut
  constructor(name) {
    this.score = 0;
    this.name = name;
  } 
  shoot() {
    console.log(this.name+" is shooting!");
    function test() {
      console.log(this)
    }
    test();
    // arrow function does not have it's own this keyword!
    const otherTest = () => {
      console.log(this);
    }
    otherTest();
  }
}

                // instantiation : példányosítás
const myPlayer = new Player('Peter');
const myOtherPlayer = new Player('Kate');

myPlayer.shoot();


class Animal {
  constructor() {
    this.alive = true;
  }
  feed() {
    console.log('feeding');
  }
}

class Dog extends Animal {
  // ha felül akarod írni(kibővíteni) a szülő osztály konstruktorát akkor meg
  // kell hívnod a super()-fgvt az alosztály konstrutkorában

  constructor(name) {
    super();
    this.name = name;
    Object.defineProperty(this, 'legsCount', {
      value: 4,
      writable: false,
      enumerable: true,
      configurable: true
    });
  }
  bark() {
    console.log('Vau vau!');
  }
}

const myDog = new Dog('Bodri');
myDog.bark();
console.log(myDog.legsCount);
myDog.legsCount = 10;
console.log(myDog.legsCount);

class MutantDog extends Dog {
  constructor() {
    super();
    Object.defineProperty(this, 'legsCount', {
      value: 3,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  bark() {
    console.log('asdasd');
  }
}

const myMutantDog = new MutantDog('test');
myMutantDog.legsCount = 10;
console.log(myMutantDog.legsCount);
myMutantDog.bark();

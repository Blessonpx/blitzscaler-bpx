// This file is a collection of different codes compiled and run while learning DSA Fundamentals
const strings=['a','b','c','d'];
strings[3];

strings.push('e')
strings.pop()

console.log(strings)
strings.unshift('x')
console.log(strings)

strings.splice(2,0,'alien')
console.log(strings)

// Reference Type for Javascript
var object1={value:10}
var object2={value:10}
var object3=object1
console.log(object1===object2)
// List is an object declaration in itself
console.log([]===[])
this.alert('Hello')

// Instantiation 
class Player{
  constructor(name,type){
    this.name=name;
    this.type=type;
  }  
  introduce(){
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

const u1= new Player('abc','Random');
console.log(u1.introduce())

// Extend Player Class

class Wizard extends Player {
  constructor(name,type){
    super(name,type)
    }
    play(){
      console.log(`Whheeeee I am a ${this.type} wizard  !!!!`);
  }
}

const bpx= new Wizard('Blesson','Awesome');
console.log(bpx.introduce())
console.log(bpx.play())



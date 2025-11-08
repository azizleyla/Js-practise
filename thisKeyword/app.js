//window object
console.log(this)

//--------------//
const obj = {
    name: "Leyla",
    getName: function (str) {
        console.log(`${str} ${this.name}`)
    },
    getNameArrow: () => {
        console.log(this.name)
    }
}
//this refers to the object that called the method.
obj.getName('Hello')
//Arrow functions do not have their own this.
//they inherit this from the lexical scope where they were created.
obj.getNameArrow()

//---------------------//
const obj2 = {
  name: "Leyla",
  regularFunc: function() {
    const arrowFunc = () => {
      console.log(this.name);
    }
    arrowFunc();
  }
};
//Lexical scope -> regularFunc, burada this -> obj.
obj2.regularFunc(); // Leyla
//----------------------//

const obj3 = {
  name: "Leyla",
  greet: function () {
    console.log(this.name)
  }
}
const func = obj3.greet
func()//undefined (funksiya adi funksya kimi cagrilib method kimi yox,regular function this-i global dan alir)


//---------------------//
const obj4 = {
  name: "Leyla",
  show: function() {
    let age = 26;
    const arrow = () => {
      console.log(this);       // name:Leyla show...
      console.log(this.name);  //  Leyla
      console.log(this.age);   // undefined
      console.log(age);        //  26
    }
    arrow();
  }
};
//Qeyd: this.property objectin propertysi olmalidir, arrow func lokal varbles baxmir!!
obj.show();


//-------------------------//
this.age = 26;
const school = "NMV";
const person = {
  name: 'Leyla',
  sayName: () => {
    console.log(this); // { age : 26 }
    console.log(this.name); // undefined
    console.log(this.age);  // 26
    console.log(this.school);  // undefined
  }
};
person.sayName();

//Nested object
const outer = {
  name: "Outer",
  inner: {
    name: "Inner",
    sayName: function() {
      console.log(this.name);
    }
  }
};

outer.inner.sayName(); // Inner /Sayname method kimi inner obyektinden cagrilir



//Call Apply Bind (this-i override etmek ucun)

const obj6 = {
  name: "Leyla",
  age:24
};

function greet(str){
  console.log(`${str}.I am ${this.name}.`)
}
greet.call(obj,'Hello')
greet.apply(obj,["Hello"])//argument olaraq array
const bindFunc = greet.bind(obj,'Hello')
bindFunc()//derhal cagrilmir ve geriye func qaytarir


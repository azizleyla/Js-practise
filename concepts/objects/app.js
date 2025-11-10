//Obyekt yaratma usullari
const obj = { a: 1, b: 2 };
const obj1 = new Object()
obj1.age = 10;

let person = {
    name: 'Millie',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
delete person.name
person['age'] = 25;
console.log(person)

//nested Obj
let student = {
    name: 'Leyla',
    age: 20,
    address: {
        street: 'St',
        city: 'Los Angeles',
        state: 'CA'
    }
};
console.log(student.address.city);

//spread operator
let merged = { ...person, ...student }
console.log(merged)


//
const user = { name: "Leyla", age: 25 };

Object.keys(user);   // ['name', 'age']
Object.values(user); // ['Leyla', 25]
Object.entries(user);// [['name','Leyla'], ['age',25]]

//Object descturing
const user2 = { name: "Leyla", age: 25 };
const { name, age } = user;

//Object freeze
const obj3 = Object.freeze({ a: 1 });
obj3.a = 2; // dəyişmir
//Object.seal (yeni propert elave etmek olmaz)
Object.seal(obj)
obj3.age = 20

//Obyekti kopyalamaq ve birlesdirmek ucun
const a = { name: "Leyla" };
const b = { age: 25 };
const mergeed = { ...a, ...b }; // Spread
// və ya
const merged2 = Object.assign({}, a, b)

//Deep ve shallow copy
const obj5 = { name: "Leyla", skills: { js: true } };
const shallow = { ...obj5 };
shallow.skills.js = false;
console.log(obj5.skills.js);
//yalniz ust seviyye propertyleri kopyalayir
// false — çünki eyni reference paylaşır

///---Deep copy--// Json.strigfy(Json.parse())
const deep = structuredClone(obj5);
deep.skills.js = false;
console.log(obj5.skills.js); // true
//QEYD:Deep copy → heap-də yeni obyekt yaradılır, pointer yenilənir → reference paylaşılmır


//Optinal chaining
const user3 = { address: { city: "Baku" } };
console.log(user?.address?.city); // "Baku"
console.log(user?.phone?.number ?? "No phone"); // "No phone"


//hasOwn
const obj6 = { a: 1 };

console.log(Object.hasOwn(obj, 'a')); // true


//for with objects
const user6 = {
    name: "Leyla",
    age: 25,
    city: "Baku"
};

for (const [key, value] of Object.entries(user6)) {
    console.log(`${key}: ${value}`);
}
//for(let key in objects)

//Stack ve Heap
let obj10 = {
    name: "Leyla"
}
let obj11 = obj10;
obj11.name = "Solmaz"
console.log(obj10)
// {name:"Leyla"} ->Heap de yaradilir
//obj10-xxx (unvani/pointer) Stack de yaradilir
//obj11 de obj10-un pointerine muraciet edir(referanslar paylasilir)

//PROTOTYPE
//Object.create ->yeni object + proto
const a1 = { x: 10 };
const b1 = Object.create(a1);//yeni obyekt yaradilir(heap de yeni slot)
b1.x = 20;
console.log(b1.hasOwnProperty('x')); //undefined
//b1-in protosu a1 dir





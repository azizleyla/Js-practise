const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Job done!");
    }, 2000);
});

p.then(result => console.log(result));

//xeta
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 2000);
});

p1.catch(err => console.log(err));

//xeta harda olsa catche dusur
new Promise(resolve => resolve(10))
    .then(val => {
        console.log(val);
        throw new Error("Problem!");
    })
    .then(() => {
        console.log("Bu işləməyəcək");
    })
    .catch(err => {
        console.log("Xəta:", err.message);//Xeta: pROBLEM
    });


//catchden sonra then isleye biler
new Promise((_, reject) => reject("Error!"))
    .catch(err => {
        console.log("Tutdum:", err);//Tutdum: Error
        return 100; // xəta bərpa olundu
    })
    .then(v => {
        console.log("Davama:", v);//Davama 100
    });


new Promise((resolve, reject) => {
    resolve("A");
    reject("B");
})
    .then(res => console.log(res))
    .catch(err => console.log(err));
//A
//Promise içində ilk çağırılan metod işləyir.


new Promise(resolve => resolve("Hi"))
    .then(v => {
        console.log(v);
        throw new Error("Oops");
    })
    .catch(err => {
        console.log("Error:", err.message);
        return "Fixed";
    })
    .then(v => console.log(v));
//'Hi'
// 'Error:' 'Oops'
// 'Fixed'


// (catch icinde throw olarsa novbeti catch onu tutur)
Promise.reject("Bad")
    .catch(err => {
        console.log("Tutdum:", err);
        throw "Yeni xəta";
    })
    .catch(x => console.log("Son:", x));
//Tutdum: Bad
// Son: Yeni xəta


// then-dən return edilmiş Promise rejected olarsa, növbəti catch onu tutur.
Promise.resolve(3)
    .then(v => Promise.reject(v + 1))
    .catch(err => console.log("Xəta:", err));//Xeta 4



Promise.resolve(1)
    .then(x => x + 1)//implicit return
    .then(x => {
        return Promise.resolve(x + 2);
    })
    .then(x => console.log(x));//4




new Promise(resolve => {
    setTimeout(() => resolve(5), 1000);
})
    .then(v => v * 2)//implict return 
    .then(v => {
        return new Promise(res => {
            setTimeout(() => res(v + 3), 500);
        });
    })
    .then(v => console.log(v));//13


//Promise.any Ilk ugurlu promise qaytarir
const p1 = Promise.reject("Xəta 1");
const p2 = Promise.resolve(42);
const p3 = Promise.resolve(100);

Promise.any([p1, p2, p3])
    .then(value => console.log("Uğurlu:", value))//42
    .catch(err => console.log(err));


//Promise.race Ilk biten promise neticesin qaytarir ugurlu ya ugursuz
const p1 = new Promise(res => setTimeout(() => res("P1 tamam"), 1000));
const p2 = new Promise(res => setTimeout(() => res("P2 tamam"), 500));

Promise.race([p1, p2])
    .then(value => console.log(value))
    .catch(err => console.log(err)); //p2


const p1 = new Promise((_, reject) => setTimeout(() => reject("Xəta P1"), 300));
const p2 = new Promise(res => setTimeout(() => res("P2 tamam"), 500));

Promise.race([p1, p2])
    .then(value => console.log("Uğur:", value))
    .catch(err => console.log("Xəta:", err));


///////////////
// Promise all
// Promise.all() bir array Promise-lər alır və hamısı fulfilled olana qədər gözləyir.

// Əgər hamısı uğurla tamamlanarsa → nəticələr array şəklində qaytarılır

// Əgər hər hansı biri rejected olarsa → dərhal rejected olur və error atır

// Nəticədə hamısı bir yerdə əldə olunur
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.log(err));
//[10, 20, 30]

const p1 = Promise.resolve(10);
const p2 = Promise.reject("Xəta P2");
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.log("Xəta:", err));

// Xəta: Xəta P2


////////////////////////////////

//Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
    .then(results => console.log(results));
//{ status: "fulfilled", value: … }
// { status: "rejected", reason: … }

const p1 = Promise.resolve(10);
const p2 = Promise.reject("Xəta P2");
const p3 = Promise.resolve(30);

Promise.allSettled([p1, p2, p3])
    .then(results => console.log(results));
//   [
//   { status: "fulfilled", value: 10 },
//   { status: "rejected", reason: "Xəta P2" },
//   { status: "fulfilled", value: 30 }
// ]



Promise.resolve(2)
  .then(v => {
    return Promise.resolve(v * 2);
  })
  .then(v => {
    if (v === 4) throw "Problem!";
    return v + 1;
  })
  .catch(err => {
    console.log("Caught:", err);
    return 10;
  })
  .then(v => console.log("Result:", v));
//Promise { <pending> }
// 'Caught:' 'Problem!'
// 'Result:' 10

const p1 = Promise.resolve(5);
const p2 = Promise.reject("Xəta P2");


//'Race result:' 5
async function run() {
  try {
    let race = await Promise.race([p1, p2]);
    console.log("Race result:", race);
  } catch (err) {
    console.log("Race error:", err);
  }
}
run();

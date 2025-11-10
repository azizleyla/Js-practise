//Linear search (evvelden baslayir axtarilan element tapilanda qeder sirayla baxir)
//Linearh search harada islenir??
// Array sıralanmamışdır → Binary search işləmir, linear search lazımdır

// Kiçik array-lər üçün → vaxt itkisi əhəmiyyətli deyil, linear search daha asandır

// Bütün elementləri yoxlamaq lazım olan hallar → məsələn, bütün 3-ləri tapmaq

function findTarget(arr, target) {
   for(let i=0;i<arr.length;i++){
     if(arr[i] === target){
       return i
     }
   }
return -1;
}
console.log(findTarget([1, 2, 5, 10], 10))
//O(n) vaxt aparir array cox boyuk olsa bir bir baxir

//---------------Example2--------------------------------------//
const arr = [3, "apple", 7, "banana", 3, "apple", 9, 3]

function findIndex(arr,target){
  let result = []
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      result.push(i)
    }
  }
  return result;
}
//Output:[0 4 7]
console.log(findIndex(arr, 3))

//---------------Example3 2D Array-------------------------------------------//
function linearSearch2D(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {         
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return [i, j];
            }
        }
    }
    return -1; 
}

const matrix = [
  [3, 5, 7],
  [1, 4, 9],
  [8, 6, 2]
];

console.log(linearSearch2D(matrix, 5)); 

//4-un setir ve sutununu tapmaliyq [1,1]
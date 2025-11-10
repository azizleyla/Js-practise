function binary(arr,target){
   let left = 0;
   let right = arr.length-1;
   while(left<=right){
     let mid = Math.floor((left+right)/2)
     if(arr[mid] === target){
        return mid
     }else if(arr[mid]<target){
        left = mid+1
     }else{
       right = mid-1;
     }
   } 
  return -1
}
console.log(binary([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23))//5


//son gorulen index
function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;       // tapıldı
      left = mid + 1;    // hələ sag tərəfdə son occurrence ola bilər(ona gore soldan kecirik saga)
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(firstOccurrence([1, 2, 2, 2, 3, 4], 2)); // Output: 1


////////Rotate Array//////////////////////////
//(evvelce artan sonra azalan array)
function searchRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length-1;
  while(left<right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid]===target) return mid;
    //demek sol teref sort olub
    if(arr[left]<=arr[mid]){
      if(arr[mid]>target && target > arr[left]){
        right = mid-1
      }else
        left = mid+1
    }else{
      if(arr[mid]<target && target<=arr[right]){
        left = mid+1
      }else right = mid-1
    }
  }
    return -1
}  

console.log(searchRotatedArray([40, 50, 60, 10, 20, 30],20))//4

//Peak(en boyuk element)
function findPeak(arr) {
  let left = 0;
  let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < arr[mid + 1]) left = mid + 1
        else right=mid
    }
    return arr[left]
}

console.log(findPeak([5, 10, 15, 25, 30, 28, 20, 18, 10, 5]));
//en boyuk element 30

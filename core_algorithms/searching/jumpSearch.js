function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  // Jump Phase
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    if (prev >= n) return -1;
    step += Math.floor(Math.sqrt(n));
  }

  // Linear Phase
  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) return -1;
  }

  return arr[prev] === target ? prev : -1;
}

console.log("Jump Search:", jumpSearch(arr, target));

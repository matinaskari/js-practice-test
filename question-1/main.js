var list = [1, 2, [3, 4, [6, 7], 8], 5];

var depth = 0;

function arrayDepth(array) {
  if (Array.isArray(array)) {
    ++depth;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (Array.isArray(element)) {
        let arr = array.flat();
        arrayDepth(arr);
      }
    }
    return depth;
  }
  throw new Error("Input must be array");
}

console.log(arrayDepth(list));

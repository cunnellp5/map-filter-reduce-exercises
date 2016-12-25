// function multiplyBy10 (array) {
//   for (var i = 0; i < array.length; i++) {
//     array[i] *= 10;
//   }
//   return array;
// };
// console.log(multiplyBy10([45, 1, -10, 11, 250]));

// function multiplyBy10(array) {
//     var arr = [];
//     arr = array.map(element => element*10)
//     return arr;
// };
// console.log(multiplyBy10([45, 1, -10, 11, 250]));

function multiplyBy10(array) {
    var arr = [];
    arr = array.map(function(element) {
        return element * 10;
    })
    return arr;
};
console.log(multiplyBy10([45, 1, -10, 11, 250]));


function shiftRight(array) {
  var arr = [];
  arr = array.map(function(element, index, array){
    if (index === 0) {
      return array[array.length-1]
    } else {
      return(array[index-1]);
    }
  });
  return arr;
};
console.log(shiftRight([{ name: '' }, 10, "left-side"]));


function onlyVowels(array) {
  arr = array.map(function(element){
    return element.toString().replace(/[^aeiou]/ig, '')
  })
  return arr

};
console.log(onlyVowels(['average', 'exceptional', 'amazing']));

function doubleMatrix(array) {
  arr = array.map((element, index, array)=>{
    return (arr = element.map(function(poop){
      return poop * 2
    }));
  })
  return (arr)
};
console.log(doubleMatrix([[1,2,3], [4,5,6], [7,8,9]]));

module.exports = {
    multiplyBy10: multiplyBy10,
    shiftRight: shiftRight,
    onlyVowels: onlyVowels,
    doubleMatrix: doubleMatrix
};

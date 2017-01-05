function onlyEven(array) {
  filtered = array.filter(function(element){
    return (element % 2 == 0);
  })
  return filtered
}
console.log(onlyEven([10,15,20,25,30,35]));


function onlyOneWord (array) {
  filtered = array.filter((element)=> {
    return !(element.includes(' '))
  })
  return filtered
};
console.log(onlyOneWord(['return', 'phrases', 'with one word']));


function positiveRowsOnly (array) {
  emptyArr = [];

  mapped = array.map(function(element) {
    return element.filter(function(element) {
    })
    emptyArr.push(element)
  })
 // filtered = array.filter((element)=>  {
 //   filt = element.filter((element)=> {
 //     return element
 //   })
 // })
 return emptyArr
};
console.log(positiveRowsOnly([[1, 10,-100], [2,-20, 200], [3, 30, 300]]));
//can do map then filter
// can also do for each and set bool = true and check


function allSameVowels (array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i].split(""))
  }
  return newArr
};
console.log(allSameVowels(['racecar', 'amalgam', 'oligopoly', 'zoom']));


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};

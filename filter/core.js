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
  mapped = array.map(function(element){
    return arr = (element.filter(function(poop){
      return poop > 0
    }))
  })
  return [arr]
};
console.log(positiveRowsOnly([[1, 10,-100], [2,-20, 200], [3, 30, 300]]));
//can do map then filter
// can also do for each and set bool = true and check`


function allSameVowels (array) {
  
};
// console.log(allSameVowels(['racecar', 'amalgam', 'oligopoly', 'zoom']));
//loop thru each word
//check vowel
// if more than one vowel present return false

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};

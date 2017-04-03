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



var array = ['racecar', 'amalgam', 'oligopoly', 'zoom'];

function allSameVowels (array) {
  
};
console.log(allSameVowels(array));



module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};

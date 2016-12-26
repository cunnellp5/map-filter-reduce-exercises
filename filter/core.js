function onlyEven(array) {
  filtered = array.filter(function(element){
    return (element % 2 == 0);
  })
  return filtered
}
console.log(onlyEven([10,15,20,25,30,35]));


function onlyOneWord (array) {
  filtered = array.filter((element)=> {
    return (element.split(' '))
  })
  return filtered
};
console.log(onlyOneWord(['return', 'phrases', 'with one word']));

function positiveRowsOnly (array) {
  // your code here
};

function allSameVowels (array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};

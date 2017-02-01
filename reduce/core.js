function sum (array) {
  return array.reduce(function(a, b){
    return a += b
  })
};
console.log(sum([5,6,7]));

function productAll (array) {
  var flatten = array.reduce(function(a,b){
    return a.concat(b)
  })
  return flatten.reduce(function(c,d){
    return c*d
  })
};
console.log(productAll([ [1, 2, 3], [4, 5], [6]]));

var matrix = [['Thundercats', '80s'],
['The Powerpuff Girls', '90s'],
['Sealab 2021', '00s']];

function objectify (array) {
  return array.reduce(function(a,pairs){
    a[pairs[0]]=pairs[1]
    return a;
  },{})
};
console.log(objectify(matrix));

var result = { 'Thundercats': '80s',
               'The Powerpuff Girls': '90s',
               'Sealab 2021': '00s' };

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};

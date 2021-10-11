
const getNthElement = (index, array) => {
  if (index>array.length-1){
    index = index - (array.length)
  }
  return array[index]
};

const arrayToCSVString = array => {
  return array.join()
};

const csvStringToArray = string => {
  let array = []
  for (let i = 0; i<string.length; i++){
    if(string[i]!== ","){
      array.push(string[i])
    }
    
  }
  return array
};

const addToArray = (element, array) => {
  array.push(element)
  // no return so should equal undefined
  
};

const addToArray2 = (element, array) => {
  // let newArr = []
  // for(let i = 0; i<array.length; i++){
  //   newArr.push(array[i])
  // }
  // newArr.push(element)
  // return newArr
  let newArr = array.concat(element)
  return newArr
  
};

const removeNthElement = (index, array) => {
  array.splice(index,1)
  return array
};

const numbersToStrings = numbers => {
  let stringArr = []
  for (let i = 0; i<numbers.length; i++){
    let num = numbers[i].toString()
    stringArr.push(num)
  }
  return stringArr
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};

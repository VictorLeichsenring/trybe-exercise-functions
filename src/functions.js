// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome (word) {
  let reverseWord = '';
  for (i=word.length-1;i>=0;i-=1) {
    reverseWord += word[i]
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}
// Requisito 2 - Crie a função getHighestIndex
function getHighestIndex(array) {
  let higherNumber;
  let higherNumberIndex;
  
   for(i=0;i<array.length;i+=1) {
     if (i===0){
         higherNumber = array[i];
         higherNumberIndex = i;
     } else {
        if (array[i]>higherNumber) {
            higherNumber = array[i];
            higherNumberIndex = i;
        }
     }
   };
   return higherNumberIndex;
}
// Requisito 3 - Crie a função getSmallestIndex

// Requisito 4 - Crie a função getLongestWord

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};

const findLongestWord = function (string) {
  const arrayWord = string.split(' ');

  let longestWord = '';

  for (let i = 0; i < arrayWord.length; i += 1)
    if (arrayWord[i].length > longestWord.length) {
      longestWord = arrayWord[i];
    }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

## [804. Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/)

###

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

- `'a'` maps to `".-"`,

- `'b'` maps to `"-..."`,

- `'c'` maps to `"-.-."`, and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

`
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
`

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

```
For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...".
We will call such a concatenation the transformation of a word.
```

Return the number of different transformations among all words we have.

#### Example 1:

```
Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
```

#### Example 2:

```
Input: words = ["a"]
Output: 1
```

#

### Çözüm

#### Kodlar

```javascript
const letters = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const words = ["gin", "zen", "gig", "msg"];

let morseCodes = [];

const decodeMorseCode = () => {
  words.map((word) => {
    let wordSplit = word.split("");

    let morseCode = "";

    wordSplit.map((item) => {
      let index = alphabet.indexOf(item);
      let code = letters[index];
      morseCode = morseCode.concat("", code);
    });
    morseCodes.push(morseCode);
  });

  let unique = [...new Set(morseCodes)];
  console.log(unique.length);
};

decodeMorseCode(words);
```

#### Çözüm Mantığım

```
İlk olarak kelimeleri tek tek dolaşıyoruz.
Üzerinde olduğumuz kelimeyi harflerine bölüyoruz.
Harflerden oluşan array içerisinde dolaşıyoruz.
Harfin alfabede kaçıncı index'te olduğunu buluyoruz.
Bu index değeri ile mors alfabesindeki kodunu buluyoruz.
Her harfe ait mors kodunu birleştirerek tek bir mors kodu oluşturuyoruz.
Son olarak benzersiz olan kodları belirleyip kaç tane olduğunu buluyoruz.
```


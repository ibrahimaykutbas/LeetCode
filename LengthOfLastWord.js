/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

const str = "Hello There ";

const lengthOfLastWord = (str) => {
    // İfadenin başındaki ve sonundaki boşlukları kaldırıyoruz
    // Böylece son eleman eğer boşluksa 0 değeri döndürmesini engellemiş oluyoruz
    const trimStr = str.trim();

    // İfade boşluklara göre bölüyoruz
    // Bu bize elemanları kelimeler olan bir array döndürüyor
    const splitStr = trimStr.split(" ");

    // Son elemanı alıyoruz
    const lastWord = splitStr.pop();

    // Son elemanın değerini alıyoruz
    const lastWordLen = lastWord.length;

    console.log(lastWordLen);
};

lengthOfLastWord(str);

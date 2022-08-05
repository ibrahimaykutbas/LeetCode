/* 
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well. 

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

const arr = [1, 2, 3];

// Tekil olan sayıları ekleyeceğimiz array
let newArr = [];

const removeDuplicatesFromSortedList = (arr) => {
    // Elimizdeki array'in her bir elemanına ulaşmak için map ile dolaşıyoruz
    arr.map((i) => {
        // Dolaştığımız her bir değerin newArr'in içerisinde olup olmadığına bakıyoruz
        // Eğer sonuç -1 ise newArr'in içerisinde yoktur ve newArr'in içerisine ekliyoruz
        if (newArr.indexOf(i) == -1) {
            newArr.push(i);
        }
    });

    console.log(newArr.sort());
};

removeDuplicatesFromSortedList(arr);

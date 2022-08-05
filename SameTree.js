/* 
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

const p = [1, 2, 3];
const q = [1, 2, 3];

// Arraylerin aynı olup olmadığını bu değişkende tutacağız
let isSameTree = false;

const checkSameTree = (p, q) => {
    // İlk olarak p ve q'nin uzunluklarını karşılaştırıyoruz
    // Eğer uzunluklar aynı değilse döngüye hiç sokmuyoruz

    if (p.length == q.length) {
        // p array'inin içerisinde dolaşıyoruz
        // Hangisi ile başladığımızın bir önemi yok
        p.map((num, index) => {
            /* 
             Eğer p arrayinde tek tek üzerinde durduğumuz değer ile 
             q arrayindeki, aynı indexteki değere eşitse
             isSameTree değişkenini true olarak değiştiriyoruz
            */
            if (num == q[index]) {
                isSameTree = true;
            } else {
                // Eğer değerler aynı değilse döngüden çıkıyoruz
                // Ve isSameTree değişkenini false olarak değiştiriyoruz
                return (isSameTree = false);
            }
        });
    }

    console.log(isSameTree ? "Same Tree" : "Not Same Tree");
};

checkSameTree(p, q);

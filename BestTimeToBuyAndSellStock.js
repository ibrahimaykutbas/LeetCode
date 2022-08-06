/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

const prices = [7, 1, 5, 3, 6, 4];

let buyPrice = 0;
let buyDay = 1;
let sellPrice = 0;
let sellDay = 1;

let profit = 0;

let message = "";

const maxProfit = (prices) => {
    // Hisse fiyatlarını tek tek dolaşıyoruz.
    prices.map((price, index) => {
        /*     
        Eğer array'in ilk elemanı ise 
        veya son satın alınan fiyat o anki değerden büyük veya eşitse
        hisse senedini alıyoruz
        */
        if (index == 0 || buyPrice >= price) {
            buyPrice = price;
            buyDay = index + 1;
        }
        /*     
        Eğer o günki gün son satın alma gününden büyükse
        veya o günki hisse değeri en yüksekse
        hisse senedini satıyoruz
        */
        if (index + 1 > buyDay && sellPrice <= price) {
            sellPrice = price;
            sellDay = index + 1;
        }
    });
    // Güncel karı hesaplıyoruz
    profit = sellPrice - buyPrice;

    // Eğer kar 0'dan büyükse bilgi veriyoruz
    // Değilse karın olmadığını belirtiyoruz
    message =
        profit > 0
            ? `Buy on day ${buyDay} (price = ${buyPrice}) and sell on day ${sellDay} (price = ${sellPrice}), profit = ${sellPrice} - ${buyPrice} = ${profit}.`
            : "No Profit!";

    console.log(message);
};

maxProfit(prices);

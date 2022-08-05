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

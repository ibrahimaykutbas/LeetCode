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

console.log(typeof(JSON.parse('4'))); // number
console.log(typeof(JSON.parse('false'))); // boolean

let cryptos = ['BNB', 'ETH', 'USDT'];
let foundCrypto: boolean;

for (let i = 0; i < cryptos.length; i++ ) {
    if (cryptos[i] === 'ETH') {
        foundCrypto = true;
        console.log(cryptos[i]);
    }
}
// ETH

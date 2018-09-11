// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000){
        var msg = { error : "You are rich, my friend! We don\'t have so much coins for exchange" };
        return msg;
    } else if (currency < 0){
        return {}
    }
    var moneysNom = [50,  25,   10,  5,   1 ];
    var coinNames = ['H', 'Q', 'D', 'N', 'P'];
    var cash = {};
    var i = 0;
    while (currency != 0 && i < moneysNom.length){
        var part = currency /  moneysNom[i]; 
        currency -= Math.floor(part) * moneysNom[i];
        var cashCoin  = Math.floor(part); 
            
        if (cashCoin != 0) {
            cash[coinNames[i]] = Math.floor(part); 
        }
        i++;
    };
    return cash;
}

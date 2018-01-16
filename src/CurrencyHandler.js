function getFloat(n){
    let s = String(n);
    let news = s.replace(',','');
    let value = new Number(news);
    return Number.parseFloat(value);
}

module.exports = getFloat;
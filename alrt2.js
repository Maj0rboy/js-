function readNumber() {
    let num;

    do {
        num = +prompt("enter a valid number?", '');
    } while (!isFinite(num))
    if (num === null || num === '') {
        return null;
    }
    return +num;



}
alert(`read: ${readNumber()}`);

function random(min, max) {
    return min + Math.random() * (max - min);
}
alert(random(1, 5));

strings

function ucFirst(str) {
    if (!str) {
        return str;

    }
    return str[0].toUpperCase() + str.slice(1);

}
alert(ucFirst("stunna"));

function checkSpam(str) {
    let lowerstr = str.toLowerCase();
    return lowerstr.includes('stunna') || lowerstr.includes('ahmed');

}
alert(checkSpam("come here STUNNA"));

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
alert(truncate("am here now boy come here you!!", 10));

function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert(extractCurrencyValue('$120'));
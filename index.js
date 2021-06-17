//First asignment
/*const checkAdult = function (the_age) {
    if (the_age > 18) {
        return true;
    } else {
        return false
    }
};*/

//Second asignment
/*const checkAbove = function (the_age) {
    if (the_age > 18) {
        return "Hello there";
    } else {
        return "Hello kiddo";
    }
};
console.log(checkAbove(27));*/

const priceInclVat = function (price, VAT) {
    const sum = price * VAT;
    return sum + price;
};
priceInclVat(2, 1.09);
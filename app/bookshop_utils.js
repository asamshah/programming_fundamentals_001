function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName
};

function makeHalfPrice(price) {
    return price / 2 
};

function countBooks(array) {
    return array.length
}

function isInStock(bob) {
    if (bob.quantity > 0) {
        return true;
    }   else {
        return false;
    }
}

function getTotalOrderPrice(price, quantity) {
    const subtotal = price * quantity
    return subtotal + (subtotal * 0.2)

    // return (price * quantity) * 1.2; - Another way of doing it instead above.
} 

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};
function newPrice(currentPrice, discount) {
    if (
        typeof currentPrice !== "number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100
    ) {
        return "Invalid"; 
    }

    const discountAmount = (currentPrice * discount) / 100; 
    // console.log(currentPrice - discountAmount);
    const finalPrice = currentPrice - discountAmount; 

    return finalPrice.toFixed(3); 
}

console.log(newPrice(2000, 15))
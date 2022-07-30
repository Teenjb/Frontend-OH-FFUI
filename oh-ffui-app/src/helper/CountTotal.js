function CountTotal(price,shippingPrice) {
    const count = parseInt(price.replace('.', '')) + parseInt(shippingPrice);
    return count.toString().split('.')[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export default CountTotal;
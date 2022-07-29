function CountCart (cart) {
    let count = 0;
    cart.forEach(item => {
        count += parseInt(item.price.replace('.','')) * item.quantity;
    }
    );
    return count.toString().split('.')[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export default CountCart;
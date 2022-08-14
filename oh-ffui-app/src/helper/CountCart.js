import ParsePrice from "./ParsePrice";

function CountCart (cart) {
    let count = 0;
    cart.forEach(item => {
        count += item.price * item.quantity;
    }
    );
    return ParsePrice(count);
}

export default CountCart;
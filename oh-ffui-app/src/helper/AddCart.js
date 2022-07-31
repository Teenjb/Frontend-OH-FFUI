async function AddCart (props){
    let cart = [];
    const {id, name, price} = props;
    const getItem = localStorage.getItem('cart');
    console.log(JSON.parse(getItem));
    if(localStorage.getItem('cart') !== null){
        cart.push(...JSON.parse(getItem));
    }
    const item = {id:id, name:name, price:price, quantity:1};
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default AddCart;
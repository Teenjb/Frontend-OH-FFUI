async function AddCart(props, extraPrice, sleeve, size) {
  let cart = [];
  const { id, name, price } = props;
  var total = parseInt(price) + parseInt(extraPrice);
  var item;

  const getItem = localStorage.getItem("cart");
  console.log(JSON.parse(getItem));
  if (localStorage.getItem("cart") !== null) {
    cart.push(...JSON.parse(getItem));
  }

  if (!size) {
    item = { id: id, name: name, price: total, quantity: 1 };
  } else {
    item = {
      id: id + size + sleeve,
      name: name + " (" + size + ") " + sleeve,
      price: total,
      quantity: 1,
    };
  }

  console.log(cart);

  if (cart.find((item) => item.id === id || item.id === id + size + sleeve)) {
    return "failed";
  } else {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    return "success";
  }
}

export default AddCart;

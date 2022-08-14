function ParsePrice (price) {
  var res = price.toString().split('.')[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return res
}

export default ParsePrice;
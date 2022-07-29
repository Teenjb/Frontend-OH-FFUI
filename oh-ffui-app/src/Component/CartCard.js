import '../index.css'; 

function CartCard(props) {
    const totalPrice = (parseInt(props.price.replace('.',''))*props.quantity).toString().split('.')[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return (<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-1/6">
            <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{props.name}</span>
            <span className="text-red-500 text-xs">OH FFUI 2022</span>
            <a href="#" id={props.id} className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={props.remove}>Remove</a>
            </div>
        </div>
        <div className="flex justify-center w-1/6">
            <input id={props.id} className="mx-2 border text-center w-8" value={props.quantity} onChange={props.change} type="number" min="1" max="10"/>
        </div>
        <span className="text-center w-2/6 font-semibold text-sm">Rp {props.price}</span>
        <span className="text-center w-2/6 font-semibold text-sm">Rp {totalPrice}</span>
    </div>)
}

export default CartCard;
import ParsePrice from '../helper/ParsePrice';
import '../index.css'; 

function CartCard(props) {
    const totalPrice = ParsePrice(props.price * props.quantity)
    return (<div className="flex items-center hover:bg-gray-100 py-5">
        <div className="flex w-3/12">
            <div className="flex flex-col justify-between flex-grow">
            <span className="font-bold text-sm">{props.name}</span>
            <span className="hidden md:block text-red-500 text-xs">OH FFUI 2022</span>
            <a href="#" id={props.id} className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={props.remove}>Remove</a>
            </div>
        </div>
        <div className="flex justify-center w-2/12">
            <input id={props.id} className="text-sm mx-4 border rounded-md text-center w-9 md:w-14" value={props.quantity} onChange={props.change} type="number" min="1" max="10"/>
        </div>
        <span className="text-center w-3/12 font-semibold text-sm">Rp {ParsePrice(props.price)}</span>
        <span className="text-center w-4/12 font-semibold text-sm">Rp {totalPrice}</span>
    </div>)
}

export default CartCard;
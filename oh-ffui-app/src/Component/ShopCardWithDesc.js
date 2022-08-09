import '../index.css';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import AddCart from '../helper/AddCart';

function ShopCardWithDesc(props){
    const handleAddCart = () =>{
        AddCart(props);
        Toastify({
            text: props.name + " added to Cart",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#87B07B",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }
    return(
        <div className='rounded-md px-10 py-10 w-auto text-center'>
            <img src={props.image} alt='' className='rounded-xl w-96 mb-4'/>
                <div className=''>
                    <h3 className='font-serif text-3xl text-black pb-2'>{props.name}</h3>
                    <h5 className='text-xl text-black pb-2 font-semibold'>Rp {props.price}</h5>
                    <p className='text-sm'>{props.desc}</p>
                    <button type="submit" id={props.id} className="w-full my-4 flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white  border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700" onClick={(e)=>(handleAddCart(e))}>Add to cart</button>
                </div>
        </div>
    )
}

export default ShopCardWithDesc;
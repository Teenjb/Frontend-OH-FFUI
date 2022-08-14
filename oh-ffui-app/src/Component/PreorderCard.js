import moment from "moment";

function PreorderCard (props){
    var date = moment(props.date);
    moment.locale("id");
    return (<div className="flex mt-5 mb-5 items-center justify-start">
        <span className="text-center w-1/6 font-normal text-sm">{props.id}</span>
        <span className="hidden md:block text-center w-1/6 font-normal break-all text-sm">{date.format('l')}</span>
        <span className="text-center w-2/6 font-normal text-sm">{props.status}</span>
        <span className="text-center md:w-1/6 font-normal text-sm">{props.detail.map((item)=>(
            <div>{item.name} x {item.quantity}</div>
        ))}</span>
        <span className="hidden md:block text-center w-1/6 font-normal text-sm">{props.price}</span>
    </div>)
}
export default PreorderCard;
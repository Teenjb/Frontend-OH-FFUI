import moment from "moment";

function PreorderCard (props){
    var date = moment(props.date);
    moment.locale("id");
    return (<div className="flex mt-5 mb-5 items-center">
        <span className="text-center w-1/6 font-normal text-sm">{props.id}</span>
        <span className="text-center w-1/6 font-normal text-sm">{date.format('lll')}</span>
        <span className="text-center w-1/6 font-normal text-sm">{props.status}</span>
        <span className="text-center w-3/6 font-normal text-sm">{props.detail.map((item)=>(
            <div>{item.namaMerchandise}</div>
        ))}</span>
    </div>)
}
export default PreorderCard;
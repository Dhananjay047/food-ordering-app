import React,{useState} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Itemcard(props) {

    const orderItem = {
        name:"",
        price:0,
        quantity:0
    }

    const [Qty,changeQty] = useState(0);


    function newQty(event){
        changeQty(event.target.value);
    }

    function removeWheel(event){event.preventDefault();}


    function sendItem(event){
        orderItem.name=props.Iname;
        orderItem.price=props.Iprice;
        orderItem.quantity=Number(Qty);
        props.onAdd(orderItem);

    }

    return (
        <div className="food-item-card">
            <div className='food-image'>
                <img src={props.imgsrc} alt="" height='150' width='200'/>
            </div>
            <div className='food-description'>
                <h2>{props.Iname}</h2>
                <h3>{props.Irating}</h3>
                <p>{props.Itext}</p>
            </div>
            <div className='food-pricing'>
                <div className='price'>
                    <h3>Price</h3>
                    <h5>per piece<br></br>{props.Iprice}₹/-</h5>
                </div>
                <div className='quantity'>
                    <h3>Quantity</h3>
                    <input onChange={newQty} type="number" name="quantity" min='0' onWheel={removeWheel}/>
                </div>
            </div>
            <div className='btn-container'>
                <AddCircleIcon type='submit' className="add-button" onClick={sendItem} style={{ fontSize: 60 , cursor:'pointer' }} />
            </div>
        </div>
    )
}

export default Itemcard


/* Genral explaination

This is the card component which will render all the cards seperatly

The constant orderItem will monitor and create a item to put in the customer List
which will be further passed into menu list through senditem function

The function newQty monitors change in quantity of card and changeQty updates Qty

this Qty value is used in sendItem function and an object of orderItem 
is passed to the menu page throuch props.onAdd function


the removeWheel function is not important it just prevents change in value in input due to mouse ewheel event
*/
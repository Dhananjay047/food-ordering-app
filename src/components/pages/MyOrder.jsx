import React,{useState} from 'react'
import {List} from './Menu'


function MyOrder() {

    var total = 0; //to print total amount

    function createList(props){
        
        var x = props.quantity; //this var x displays float in number + half form and full in number form
        if(x===0.5)
        {   x="half"; }
        else if(x===1)
        {   x=1; }
        else if(x>1 && x%2===0)
        {   x= props.quantity }
        else if(x>1 && x%1===0)
        {   x= props.quantity }
        else if(x>1 && x%0.5===0)
        {   x= (props.quantity - 0.5 )+" & half" }
        else{   x=props.quantity }

        return (
            <div className='my-list-items'>
                <span className='list-item'>{props.name} </span>
                <span className='list-item'>{props.price} </span>
                <span className='list-item'>{x}</span>        
            </div>
        )     
    }

    return (
        <div className='my-order-container'>
            <div className='list-container'>
                <h1>Your Order Bill</h1>
                <div className='my-list-items-container'>
                    <div className='my-list-items heading'>
                        <div className='list-item heading'>Name </div>
                        <div className='list-item heading'>Price per piece </div>
                        <div className='list-item heading'>Quantity</div>        
                    </div>
                    {List.map(createList)}
                </div>
                {List.forEach(elem => total+=(elem.price*elem.quantity))}
                <h1>Total={total}</h1>
            </div>
        </div>
    )
}

export default MyOrder;


//we have imported List from menu and to show our all items that customer has purchased. and we are showing items by map function in line 43
//In line 45 the total is calculted by for each loop
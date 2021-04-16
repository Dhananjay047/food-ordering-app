import React,{useState} from 'react'
import Itemcard from '../Itemcard'
import ItemList from "../../MenuList.js"
import {Link} from 'react-router-dom'


var List = [];

function Menu() {

    const [orderList,updateList] = useState([]); //montitors user orders

    function addItem(newItem){
        updateList(prevItems => [...prevItems, newItem]); //adds new item in order list
    } 

    function checkOut(){
        List=orderList;  //order list value is assigned to global variable list that will be exported to my order to make bill
    }

    function createItem(Item) {  ///this creates cards to show in menu
        return (
            <Itemcard 
                key={Item.id}
                Iid={Item.id}
                imgsrc={Item.image} 
                Iname={Item.name} 
                Irating={Item.rating} 
                Itext={Item.description} 
                Iprice={Item.price}
                onAdd={addItem}
            />
        );
      }

    return (
        <div className='menu'>
            <div className='menu-container'>
            <h1 className='menu-title'>All you can Eat</h1>
            <div className='menu-list'> 
                {ItemList.map(createItem)}                
            </div>
            <Link to='/my-order'><button className='checkout-button' onClick={checkOut}>check out</button></Link>
            </div>
        </div>
    )

    
}



export {List,Menu} ;



//all the items to show in menu are imported from MenuList.js and purchsed items are exported by the help of List variable; 
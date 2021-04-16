import React from 'react'
import {Link} from "react-router-dom"



function Home(){
    return(
        <div class="home-page"> 
           <div class="front-content">
                <div className='taglines'>
                    <h1 className='home-title left'>Good food,</h1>
                    <h1 className='home-title right'>Good mood</h1>
                    <p className='home-description'>It’s not true that money can’t buy happiness. <br></br> 
                                                    I mean, have you tried buying food from our store ? <br></br> 
                                                    It’s the same thing!</p>
                    <Link to='/Menu' style={{ textDecoration: 'none' }} ><div class='menubutton'>Check our Menu</div></Link>
                </div>
                <div className='some-pics'>
                    <div className='rows'>
                        <img className='home-images' src="images/img-2.jpg" alt="" height='270' width='300'/>
                        <img className='home-images' src="images/img-3.jpg" alt="" height='270' width='300'/>
                    </div>
                    <div className='rows'>
                        <img className='home-images' src="images/img-4.jpg" alt="" height='270' width='300'/>
                        <img className='home-images' src="images/img-5.jpg" alt="" height='270' width='300'/>
                    </div>
                </div>
           </div>
        </div>  
    )
}

export default Home;
import React,{useState ,useEffect} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){

	const [click,change] = useState(false);
	const [button,setButton] = useState(true);

	function handleClick(){
		change(click?false:true);
		console.log(click);
	} 

	const closeMenu = () => change(false);

	const showButton = () => {
		if (window.innerWidth <= 900 ) {
			setButton(false);
		}
		else{
			setButton(true);	
		}
	}

	useEffect(()=>{
		showButton();
	},[]);

	window.addEventListener('resize',showButton);

	return(
		<div className="navbar">
			<nav className="navbar-container">	
				<Link to="/" className="navbar-logo" onClick={closeMenu}>
					Eat24  <i class="fas fa-utensils navbar-logo"></i>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} ></i>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/menu" className="nav-links" onClick={closeMenu}>Menu</Link>
					</li>
					<li className="nav-item">
						<Link to="/my-order" className="nav-links" onClick={closeMenu}>Myorder</Link>
					</li>
					<li className="nav-item">
						<Link to="/contacts" className="nav-links" onClick={closeMenu}>Contact</Link>
					</li>
					<li>
						<Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu} >Sign Up</Link>
            		</li>
				</ul>
			</nav> 
		</div>
	);

}

export default Navbar;

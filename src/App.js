import React from 'react'
import  {BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./components/pages/Home";
import {Menu} from "./components/pages/Menu"
import Myorder from './components/pages/MyOrder'
import Contact from './components/pages/Contact'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      	<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/menu' exact component={Menu}/>
				<Route path='/my-order' exact component={Myorder}/>
				<Route path='/contacts' exact component={Contact}/>
			</Switch>
			<Footer />
		</Router>
    </div>
  );
}

export default App;

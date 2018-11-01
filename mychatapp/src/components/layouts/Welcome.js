import React, {Component} from 'react'
import Login from '../auth/Login'
import './Welcome.css';
import UserInfo from "..//UserInfo";
class Welcome extends Component{
	render(){
		return (
			<div>
			  <h1>MyChat</h1>
			  <h2 className = "welcome-header">
			  Welcome to my simple social chat app</h2>
			  <UserInfo/>
			 
			</div>
		)
	}
}

export default Welcome

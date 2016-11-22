import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component
{
	constructor()
	{
		super();
		this.state = {time: new Date().toLocaleTimeString()};
	}
	render(){
		setInterval(()=>
		{
			this.setState({time: new Date().toLocaleTimeString()})
		}, 1000);
		return (
		<div>
			{this.state.time}
			<Header/>
			<Footer/>
		</div>
		);
	}
}
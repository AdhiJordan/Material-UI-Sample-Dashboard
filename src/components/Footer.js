import React, {Component} from 'react';
import './../index.css'

export default class Footer extends Component{

	constructor(props){
        super(props);
        this.state = {
           
        }
    }

	render(){
		return(
			<div className="footerCls">
				<p className="text-left">Footer</p>
			</div>
		);
	}
}
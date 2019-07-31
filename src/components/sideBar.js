import React, {Component} from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

export default class SideBar extends Component{
	selectedmenu(navLink){
		this.props.menuSelection(navLink)
	}
	render(){
		return(
			<div className="pt-5" onClick={this.selectedmenu.bind(this, this.props.menus.navLink)}>
			<List>
	          	<Link to={this.props.menus.navLink} key={this.props.menus.index}>
	            <ListItem button key={this.props.menus.index}>
	              <ListItemIcon>
	              	{(this.props.menus.imgUrl === "inbox") ?  <InboxIcon /> : null}
	              	{(this.props.menus.imgUrl === "mail") ?  <MailIcon /> : null}
	             
	              </ListItemIcon>
	              <ListItemText primary={this.props.menus.title} />
	            </ListItem>
	            </Link>
	        </List>
	        </div>
		);
	}
}
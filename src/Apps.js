import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll';
import './Apps.css';

class Apps extends Component {
	constructor() {
		super();
		this.state={
			robot:[],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robot:users}));
	}
	onSearchChange=(event)=> {
		this.setState({searchfield:event.target.value})
	}
	render() {

				const filterrobot=this.state.robot.filter(robot=> {
					return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
				})
				
					return (
						<div className='tc'>
								<h1 className='grow f1'> RoboFriends </h1>
								<SearchBox searchChange={this.onSearchChange} />
								<Scroll>
							    <CardList robot={filterrobot} />
								</Scroll>
						</div>
					    );
				
				
			 } }
export default Apps;
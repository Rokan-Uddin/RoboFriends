import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll';
import './Apps.css';

require('dotenv').config();
const mongoose=require('mongoose');
// mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// const db=mongoose.connection;
// db.on('error',(error)=> console.error(error));	
// db.once('open', ()=>console.log("Database connected"));

class Test extends Component {

	render() {

				const aa="Hello world";
		


				
					return (
						<div className='tc'>
								<h1 className='grow f1'> {aa} </h1>
								
								
						</div>
					    );
				
				
			 } }
export default Test;
// import React,{Component} from 'react';
// // require('dotenv').config();
// // const express=require('express');
// // const app=express();
// // const mongoose=require('mongoose');

// // mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// // const db=mongoose.connection;
// // db.on('error',(error)=> console.error(error));
// // db.once('open', ()=>console.log("Database connected"));


// class Test extends Component {
// render() {
// 	return();
//  }
// }
// export default Test;
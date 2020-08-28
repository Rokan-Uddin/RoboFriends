import React from 'react';
import './hello.css';

const Hello =(props)=>{
	return (
		<div className='f1 tc'>
			<h2 > Hello Bangladesh </h2>
			<p>{props.greeting} </p>
		</div>	
		)
}
export default Hello;
import React from 'react';
import Card from './Card';

const CardList=({robot})=> {

	const cardComponent=robot.map((user,i) => {
		//what is the uses of user parameter
		return <Card 
		key={i}
		id={robot[i].id} 
		name={robot[i].name} 
		email={robot[i].email} 
		/>
	})
	
	return (
	<div>
			{cardComponent}
   </div>

		);
}

export default CardList;
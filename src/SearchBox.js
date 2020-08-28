import React from 'react';

const SearchBox=({searchChange})=> {
	return(
				<div className='pa3'>
						<input 
						className='tc f3 bb pa2 bg-light-green '
						 type="search" 
						 placeholder="Search Robot"
						 onChange={searchChange}
						 />
				</div>
 
		);
}
export default SearchBox;
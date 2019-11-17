import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => (
		<div>
			<input className="form-control w-100" type="search" placeholder={placeholder} onChange={handleChange}/>
		</div>
);

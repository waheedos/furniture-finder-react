import React from 'react';

export const SearchFilter = ({placeholder, handleChange}) => (
		<input className="form-control w-100" type="search" placeholder={placeholder} onChange={handleChange}/>
);

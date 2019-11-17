import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => (
		<input className="form-control" type="search" placeholder={placeholder} onChange={handleChange}/>
);

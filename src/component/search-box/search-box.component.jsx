import React from 'react';

export const SearchBox = ({placeHolderText, onSearchChange}) => (
		<input className="form-control w-100" type="search" placeholder={placeHolderText} onChange={onSearchChange}/>
);

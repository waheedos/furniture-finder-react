import React from 'react';
import { Card } from '../card/card.component.jsx';

export const CardList = props => {
	// console.log(props);
	return (
			
			<div className="container-fluid">
				<div className="row px-2 pb-4">
					
					{props.furniture.map(furniture => (
							<Card key={furniture.id} furniture={furniture}/>
					))}
				
				</div>
			</div>
	)
};

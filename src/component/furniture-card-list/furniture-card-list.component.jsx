import React from 'react';
import {FurnitureCard} from '../furniture-card/furniture-card.component.jsx';

export const FurnitureCardList = props => {
	return (
			
			<div className="container-fluid navbar-padding-top-lg">
				<div className="row px-2 pb-4">
					
					{props.productData.map(
							( productDataMap, key ) => (
									<FurnitureCard key={key} productData={productDataMap}/>
							)
						)
					}
				
				</div>
			</div>
	)
};

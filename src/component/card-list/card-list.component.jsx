import React from 'react';
import {Card} from '../card/card.component.jsx';

export const CardList = props => {
	// console.log(props);
	return (
			
			<div className="container-fluid">
				<div className="row px-2 pb-4">
					
					{props.productData.map(
							( key, productDataMap, deliveryTimeMap ) => (
									<Card key={key} productData={productDataMap} deliveryTime={deliveryTimeMap['delivery_time']}/>
							)
						)
					}
				
				</div>
			</div>
	)
};

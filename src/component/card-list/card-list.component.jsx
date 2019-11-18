import React from 'react';
import {Card} from '../card/card.component.jsx';

export const CardList = ( NameOfProduct,  ) => {
	// console.log(props);
	return (
			
			<div className="container-fluid">
				<div className="row px-2 pb-4">
					
					{NameOfProduct.productData.map(
							( productList, key ) => (
									<Card key={key} productData={productList}/>
							)
						)
					}
				
				</div>
			</div>
	)
};

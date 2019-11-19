import React from 'react';

export const FurnitureCard = ( productDataMap ) => (
		
		<div className="col-md-6 pt-3 mt-1">
			<div className="card shadow h-100">
				<div className="card-body d-flex flex-column justify-content-between">
					
					<div className="w-100 px-0 pb-2">
						<div className="row">
							<h4 className="col-md-6 card-title">
								{productDataMap.productData['name']}
							</h4>
							<h5 className="col-md-6 card-subtitle text-warning text-md-right text-left py-md-0 py-2">
								Rp. {productDataMap.productData['price'].toLocaleString('en-US')}
							</h5>
						</div>
					</div>
					
					<p className="card-text">
						{productDataMap.productData['description']}
					</p>
					
					<div className="w-100 px-0 py-md-0 py-2">
						<div className="text-primary">
							Style: <b>{productDataMap.productData['furniture_style'].join(', ')}</b>
						</div>
					</div>
					
					<div className="w-100 text-right px-0 py-md-0 py-2">
						<div className="text-primary text-underline">
							Delivery Time: <b>{productDataMap.productData['delivery_time']} {productDataMap.productData['delivery_time'] > 1 ? "Days" : "Day" }</b>
						</div>
					</div>
				
				</div>
			</div>
		</div>
);

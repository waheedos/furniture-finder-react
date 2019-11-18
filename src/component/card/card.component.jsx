import React from 'react';

export const Card = ( productList ) => (
		
		<div className="col-md-6 pt-3 mt-1">
			<div className="card shadow h-100">
				<div className="card-body">
					
					<div className="col-12 px-0 pb-2">
						<div className="row">
							<h4 className="col-md-6 card-title">
								{productList.productData['name']}
							</h4>
							<h5 className="col-md-6 card-subtitle text-warning text-md-right text-left py-md-0 py-2">
								IDR {productList.productData['price']}
							</h5>
						</div>
					</div>
					
					<p className="card-text">
						{productList.productData['description']}
					</p>
					
					<div className="col-12 px-0 py-md-0 py-2">
						<div className="text-primary">
							Style: <b>{productList.productData['furniture_style'].join(', ')}</b>
						</div>
					</div>
					
					<div className="col-12 text-right px-0 py-md-0 py-2">
						<div className="text-primary" style={{ textDecoration: 'underline !important'}}>
							Time of Delivery: <b>{productList.productData['delivery_time']} {productList.productData['delivery_time'] > 1 ? "Days" : "Day" }</b>
						</div>
					</div>
				
				</div>
			</div>
		</div>
);

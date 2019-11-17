import React from 'react';

export const Card = (props) => (
		
		<div className="col-md-6 pt-3 mt-1">
			<div className="card shadow h-100">
				<div className="card-body">
					
					<div className="col-12 px-0 pb-2">
						<div className="row">
							<h4 className="col-md-6 card-title">
								{props.furniture.name}
							</h4>
							<h5 className="col-md-6 card-subtitle text-warning text-md-right text-left py-md-0 py-2">
								IDR {props.furniture.price}
							</h5>
						</div>
					</div>
					
					<p className="card-text">
						{props.furniture.description}
					</p>
					
					<div className="col-12 px-0 py-md-0 py-2">
						<div className="text-primary">
							Style: <b>{props.furniture['furniture_style']}</b>
						</div>
					</div>
					
					<div className="col-12 text-right px-0 py-md-0 py-2">
						<div className="text-primary" style={{ textDecoration: 'underline !important'}}>
							Time of Delivery: <b>{props.furniture['delivery_time']} {props.furniture['delivery_time'] > 1 ? "Days" : "Day" }</b>
						</div>
					</div>
				
				</div>
			</div>
		</div>
);

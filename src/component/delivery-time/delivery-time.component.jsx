import React from 'react';

export const DeliveryTime = ({ handleChange }) => (
		<select className="selectpicker show-tick w-100"
		        data-style="bg-white"
		        title="Delivery Time"
		        onChange={handleChange}
		        multiple>
			<optgroup label="Delivery Time">
				<option>1 Day</option>
				<option>2 Days</option>
				<option>3 Days</option>
				<option>4 Days</option>
				<option>5 Days</option>
			</optgroup>
		</select>
);

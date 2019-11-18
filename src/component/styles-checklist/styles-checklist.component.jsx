import React from 'react';

export const StylesChecklist = ({handleChange}) => (
		<select className="selectpicker show-tick w-100"
		        data-style="bg-white"
		        title="Search Furniture"
		        onChange={handleChange}
		        multiple>
			<optgroup label="Furniture Style">
				<option>Contemporary</option>
				<option>Modern</option>
				<option>Scandinavian</option>
				<option>Classic</option>
				<option>Midcentury</option>
			</optgroup>
		</select>
);

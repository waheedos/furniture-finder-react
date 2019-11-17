import React, {Component} from 'react';
import Select from 'react-select';

const DeliveryDays = [
	{ value: '1', label: '1 Day' },
	{ value: '7', label: '7 Days' },
	{ value: '12', label: '12 Days' },
	{ value: '14', label: '14 Days' },
	{ value: '28', label: '28 Days' },
];

class DeliveryTime extends Component {
	state = {
		selectedOption: null,
	};
	
	DeliveryTimeHandler = e => {
		this.setState({ e });
		console.log(`Option selected:`, e);
	};
	
	render() {
		const { TimeToDeliver } = this.state;
		
		return (
				<Select
						isMulti
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						value={TimeToDeliver}
						onChange={this.DeliveryTimeHandler}
						options={DeliveryDays}
				/>
		);
	}
}

export default DeliveryTime;

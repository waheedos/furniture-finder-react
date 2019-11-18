import React, {Component} from 'react';
import Select from 'react-select';

class DeliveryTime extends Component {
	
	constructor() {
		super();
		this.state = {
			productData: []
		};
	}
	
	dataFetch() {
		fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
				.then(dataJSON => {
					if (dataJSON.status === 200) {
						return dataJSON.json()
					}
				})
				
				.then(dataJSON => {
					this.setState({
						productData: dataJSON['products'],
					});
					// console.log(dataJSON['furniture_styles'])
				})
	}
	
	state = {
		selectedOption: null,
	};
	
	componentDidMount(){
		this.dataFetch();
	};
	
	DeliveryTimeHandler = DaysOfDelivery => {
		this.setState({ DaysOfDelivery });
		console.log(`Time Selected:`, DaysOfDelivery);
	};
	
	render() {
		const { productData, TimeToDeliver } = this.state;
		const DeliveryDays = [];
		const deliveryTimeListSorted = DeliveryTime.sortUnique(productData.map(dataJSON => dataJSON['delivery_time']) );
		deliveryTimeListSorted.map((value) => {
			DeliveryDays.push({
				value: value > 1 ? value + " Days" : value + " Day",
				label: value > 1 ? value + " Days" : value + " Day"
			})
		});
		
		return (
				<Select
						placeholder='Delivery Time'
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

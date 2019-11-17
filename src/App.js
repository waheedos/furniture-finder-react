import React, {Component} from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component";
import Select from 'react-select';

const FurnitureStyles = [
	{ value: 'Classic', label: 'Classic' },
	{ value: 'Midcentury', label: 'Midcentury' },
	{ value: 'Scandinavian', label: 'Scandinavian' },
	{ value: 'Modern', label: 'Modern' },
	{ value: 'Contemporary', label: 'Contemporary' }
];

const DeliveryDays = [
	{ value: '1', label: '1 Day' },
	{ value: '7', label: '7 Days' },
	{ value: '12', label: '12 Days' },
	{ value: '14', label: '14 Days' },
	{ value: '28', label: '28 Days' }
];

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			productData: [],
			SearchName: ''
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
						productData: dataJSON['products']
					})
				})
	}
	
	state = {
		selectedOption: null,
	};
	
	componentDidMount(){
		this.dataFetch();
	};
	
	onSearchChange = keyEvent => {
		this.setState({
			SearchName: keyEvent.target.value
		});
		console.log(keyEvent.target);
	};
	
	FurnitureStyleHandler = Style => {
		this.setState({ Style });
		// console.log(`Furniture Selected:`, Style.target.value);
	};
	
	DeliveryTimeHandler = Days => {
		this.setState({ Days });
		// console.log(`Time Selected:`, Days);
	};
	
	render() {
		const { productData, SearchName, StyleOfFurniture, TimeToDeliver } = this.state;
		
		const productNameSearch = productData.filter(
			product => product.name.toLowerCase()
				.includes(
					SearchName.toLowerCase(),
				)
		);
		
		return (
				
				<section>
					
					<div className="bg-primary p-4">
						<div className="row">
							
							<div className="col-md-6">
								<h2 className='text-white my-2 my-md-0'>Search Furniture</h2>
							</div>
							
							<div className="col-md-6">
								<form className="form-inline my-2 my-md-0 border-bottom">
									<SearchBox placeholder='Search Furniture' handleChange={this.onSearchChange}/>
								</form>
							</div>
						
						</div>
						
						<div className="row">
							
							<div className="col-md-6 pt-3">
								<Select
										placeholder='Furniture Style'
										isMulti
										closeMenuOnSelect={false}
										hideSelectedOptions={false}
										value={StyleOfFurniture}
										onChange={this.FurnitureStyleHandler}
										options={FurnitureStyles}
								/>
							</div>
							
							<div className="col-md-6 pt-3">
								<Select
										placeholder='Delivery Time'
										isMulti
										closeMenuOnSelect={false}
										hideSelectedOptions={false}
										value={TimeToDeliver}
										onChange={this.DeliveryTimeHandler}
										options={DeliveryDays}
								/>
							</div>
						
						</div>
					
					</div>
					
					<CardList
							productData={productNameSearch}
					/>
				
				</section>
		
		)
	}
}

export default App;

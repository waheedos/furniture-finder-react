import React, {Component} from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component";
import Select from 'react-select';

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			FurnitureCategory: [],
			productData: [],
			deliveryTimeList: [],
			SearchName: '',
			SearchFS: '',
			SearchDT: ''
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
						FurnitureCategory: dataJSON['furniture_styles'],
						productData: dataJSON['products'],
						deliveryTimeList: dataJSON['products']['delivery_time']
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
	
	onSearchChange = FurnitureName => {
		this.setState({ SearchName: FurnitureName.target.value });
		console.log(FurnitureName.target.value);
	};
	
	FurnitureStyleHandler = FurnitureStyle => {
		this.setState({ SearchFS: FurnitureStyle });
		console.log(`Furniture Selected:`, FurnitureStyle);
	};
	
	DeliveryTimeHandler = DaysOfDelivery => {
		this.setState({ SearchDT: DaysOfDelivery });
		console.log(`Time Selected:`, DaysOfDelivery);
	};
	
	static sortUnique(arr) {
		if (arr.length === 0) return arr;
		arr = arr.sort(function (a, b) {
			return a * 1 - b * 1;
		});
		const ret = [arr[0]];
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] !== arr[i]) {
				ret.push(arr[i]);
			}
		}
		return ret;
	}
	
	render() {
		const { productData, SearchName, StyleOfFurniture, TimeToDeliver, FurnitureCategory } = this.state;
		
		const DeliveryDays = [];
		
		const deliveryTimeListSorted = App.sortUnique(productData.map(dataJSON => dataJSON['delivery_time']) );
		deliveryTimeListSorted.map((value) => {
			DeliveryDays.push({
				value: value > 1 ? value + " Days" : value + " Day",
				label: value > 1 ? value + " Days" : value + " Day"
			})
		});
		
		const FurnitureOptions = [];
		FurnitureCategory.map((value) => {
			FurnitureOptions.push({
				value: value,
				label: value
			})
		});
		
		const productDataSearch = productData.filter(
				dataJSON => dataJSON.name.toLowerCase()
				.includes(
					SearchName.toLowerCase()
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
								<SearchBox placeHolderText='Search Furniture' onSearchChange={this.onSearchChange}/>
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
									options={FurnitureOptions}
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
						productData={productDataSearch}
				/>
			
			</section>
		
		)
	}
}

export default App;

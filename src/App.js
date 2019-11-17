import React, {Component} from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component";
import {StylesChecklist} from "./component/styles-checklist/styles-checklist.component";
import {DeliveryTime} from "./component/delivery-time/delivery-time.component";

class App extends Component {
	constructor() {
		super();
		this.state = {
			productData: [],
			// productStyleJSON: [],
			// productCategoryJSON: [],
			Title: '',
			SearchName: '',
			SearchDeliveryTime: '',
			SearchStyle: ''
		};
	}
	
	dataLog() {
		fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
				.then(response => {
					// if(response.status === 200){
					return response.json()
					// }
				})
				
				.then(response => console.log(response));
		
	}
	
	dataFetch() {
		fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
				.then(dataJSON => {
					if (dataJSON.status === 200) {
						return dataJSON.json()
					}
				})
				
				// .then( response => console.log(response));
				
				.then(dataJSON => {
					this.setState({
						productCategoryJSON: dataJSON['furniture_styles'],
						productData: dataJSON['products'],
						productStyle: dataJSON['products']['furniture_style']
					})
				})
	}
	
	componentDidMount(){
		this.dataFetch();
		this.dataLog();
	};
	
	onSearchChange = keyEvent => {
		this.setState({
			SearchName: keyEvent.target.value
		})
	};
	
	deliveryTimeChange = keyEvent => {
		this.setState({
			SearchDeliveryTime: keyEvent.target.value
		})
	};
	
	render() {
		const {productData, SearchName, SearchDeliveryTime} = this.state;
		
		const productNameSearch = productData.filter(
				product => product.name.toLowerCase().includes(
						SearchName.toLowerCase()
				)
		);
		
		const deliveryTimeSearch = productData.filter(
				product => product['delivery_time'].toLowerCase().includes(
						SearchDeliveryTime.toLowerCase()
				)
		);
		// const productStyleSearch = productStyle.filter(
		// 		productStyle => productStyle
		// );
		
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
								<StylesChecklist/>
							</div>
							
							<div className="col-md-6 pt-3">
								<DeliveryTime placeholder='Delivery Time' handleChange={this.deliveryTimeChange}/>
							</div>
						
						</div>
					
					</div>
					
					<CardList
							productData={productNameSearch}
							deliveryTime={deliveryTimeSearch}
					/>
				
				</section>
		
		)
	}
}

export default App;

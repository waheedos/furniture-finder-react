import React, { Component } from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component";

class FurnitureFinder extends Component {
	constructor() {
		super();
		this.state = {
			furniture: [],
			searchField: ''
		};
		// this.handleChange = this.handleChange.bind(this);
	}
	
	// dataLog(){
	// 	fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
	// 			.then( response => {
	// 				if(response.status === 200){
	// 					return response.json()
	// 				}
	// 			})
	//
	// 	.then( response => console.log(response) );
	//
	// }
	
	dataFetch(){
		fetch('assets/data/data.json')
				.then( response => {
					if(response.status === 200){
						return response.json()
					}
				})
				
				// .then( response => console.log(response));
				
				.then(dataResponse => {
					this.setState({
						furnitureStyles: dataResponse['furniture_styles'],
						furniture: dataResponse.products,
						filteredProduct: dataResponse.products
					})
				})
	}
	
	componentDidMount() {
		this.dataFetch();
		// this.dataLog();
	};
	
	
	handleChange = e => {
		this.setState({searchField: e.target.value})
	};
	
	render() {
		const { furniture, searchField } = this.state;
		const filteredfurniture = furniture.filter(
				products => products.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
				
				<section>
					
					<div className="bg-primary p-4">
						<div className="row">
							
							<div className="col-md-6">
								<form className="form-inline my-2 my-md-0 border-bottom">
									<SearchBox placeholder='Search Furniture' handleChange={this.handleChange} />
								</form>
							</div>
						
						</div>
						
						<div className="row">
							
							<div className="col-md-6 pt-3">
								<select className="selectpicker show-tick w-100"
								        data-style="bg-white"
								        title="Furniture Style"
								        multiple>
									<optgroup label="Furniture Style">
										<option>Contemporary</option>
										<option>Modern</option>
										<option>Scandinavian</option>
										<option>Classic</option>
										<option>Midcentury</option>
									</optgroup>
								</select>
							</div>
							
							<div className="col-md-6 pt-3">
								<select className="selectpicker show-tick w-100"
								        data-style="bg-white"
								        title="Delivery Time"
								        multiple>
									<optgroup label="Delivery Time">
										<option>1 Day</option>
										<option>2 Days</option>
										<option>3 Days</option>
										<option>4 Days</option>
										<option>5 Days</option>
									</optgroup>
								</select>
							</div>
						
						</div>
					
					</div>
					
					<CardList furniture={filteredfurniture}/>
				
				</section>
		
		)
	}
}

export default FurnitureFinder;

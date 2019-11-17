import React, {Component} from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component";
import {StylesChecklist} from "./component/styles-checklist/styles-checklist.component";
import Select from 'react-select';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

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
	
	state = {
		selectedOption: null,
	};
	
	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};
	
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
	
	render() {
		const { selectedOption } = this.state;
		
		const {productData, SearchName} = this.state;
		
		const productNameSearch = productData.filter(
				product => product.name.toLowerCase().includes(
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
								<StylesChecklist/>
							</div>
							
							<div className="col-md-6 pt-3">
								<Select
										isMulti
										value={selectedOption}
										onChange={this.handleChange}
										options={options}
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

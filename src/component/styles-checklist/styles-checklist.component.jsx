import React, {Component} from 'react';
import Select from 'react-select';

class StylesCheckList extends Component {
	
	constructor() {
		super();
		this.state = {
			FurnitureCategory: [],
		};
	}
	
	stylesFetch() {
		fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
				.then(dataJSON => {
					if (dataJSON.status === 200) {
						return dataJSON.json()
					}
				})
				
				.then(dataJSON => {
					this.setState({
						FurnitureCategory: dataJSON['furniture_styles']
					});
					// console.log(dataJSON['furniture_styles'])
				})
	}

	componentDidMount(){
		this.stylesFetch();
	};
	
	state = {
		selectedOption: null,
	};
	
	FurnitureStyleHandler = FurnitureStyle => {
		this.setState({ FurnitureStyle });
		console.log(`Furniture Selected:`, FurnitureStyle);
	};
	
	render() {
		const { StyleOfFurniture, FurnitureCategory } = this.state;
		const FurnitureOptions = [];
		FurnitureCategory.map((value) => {
			FurnitureOptions.push({
				value: value,
				label: value
			})
		});
		
		return (
				<Select
						isMulti
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						value={StyleOfFurniture}
						onChange={this.FurnitureStyleHandler}
						options={FurnitureOptions}
				/>
		);
	}
}

export default StylesCheckList;

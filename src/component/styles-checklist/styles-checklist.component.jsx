import React, {Component} from 'react';
import Select from 'react-select';

const FurnitureStyles = [
	{ value: 'Classic', label: 'Classic' },
	{ value: 'Midcentury', label: 'Midcentury' },
	{ value: 'Scandinavian', label: 'Scandinavian' },
	{ value: 'Modern', label: 'Modern' },
	{ value: 'Contemporary', label: 'Contemporary' },
];

class StylesCheckList extends Component {
	
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		furnitureStyles: [],
	// 	};
	// }
	
	// stylesFetch() {
	// 	fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
	// 			.then(dataJSON => {
	// 				if (dataJSON.status === 200) {
	// 					return dataJSON.json()
	// 				}
	// 			})
	//
	// 			.then( dataJSON => console.log(dataJSON['furniture_styles']))
	//
	// 			.then(dataJSON => {
	// 				this.setState({
	// 					furnitureStyles: dataJSON['furniture_styles']
	// 				})
	// 			});
	// }
	//
	// componentDidMount(){
	// 	this.stylesFetch();
	// };
	
	state = {
		selectedOption: null,
	};
	
	FurnitureStyleHandler = e => {
		this.setState({ e });
		console.log(`Option selected:`, e);
	};
	
	render() {
		const { StyleOfFurniture } = this.state;
		
		return (
				<Select
						isMulti
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						value={StyleOfFurniture}
						onChange={this.FurnitureStyleHandler}
						options={FurnitureStyles}
				/>
		);
	}
}

export default StylesCheckList;

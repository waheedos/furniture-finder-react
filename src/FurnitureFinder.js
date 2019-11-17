import React, {Component} from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component";
import {StylesChecklist} from "./component/styles-checklist/styles-checklist.component";

class FurnitureFinder extends Component {
  constructor() {
    super();
    this.state = {
      productNameJSON: [],
      productStyleJSON: [],
      // furnitureCategory: [],
      nameSearch: '',
      styleSearch: '',
    };
  }
  
  dataLog(){
    fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
        .then( response => {
          if(response.status === 200){
            return response.json()
          }
        })
        
        .then( response => console.log(response) );
    
  }
  
  dataFetch() {
    fetch('assets/data/data.json')
        .then(dataJSON => {
          if (dataJSON.status === 200) {
            return dataJSON.json()
          }
        })
        
        // .then( response => console.log(response));
        
        .then(dataJSON => {
          this.setState({
            productCategoryJSON: dataJSON['furniture_styles'],
            productNameJSON: dataJSON['products'],
            productStyleJSON: dataJSON['products']['furniture_style']
          })
        })
  }
  
  componentDidMount() {
    this.dataFetch();
    this.dataLog();
  };
  
  NameSearchHandleChange = SearchProductName => {
    this.setState({nameSearch: SearchProductName.target.value})
  };
  
  StyleSearchHandleChange = SearchProductStyle => {
    this.setState({styleSearch: SearchProductStyle.target.value})
  };
  
  render() {
    const {productNameJSON, productStyleJSON, nameSearch, styleSearch} = this.state;
    const productNameSearch = productNameJSON.filter(
        productNameJSON => productNameJSON.name.toLowerCase().includes(
            nameSearch.toLowerCase()
        )
    );
    // const productStyleSearch = productStyleJSON.filter(
    // 		productStyleJSON => productStyleJSON.toLowerCase().includes(
    // 				styleSearch.toLowerCase()
    // 		)
    // );
    return (
        
        <section>
          
          <div className="bg-primary p-4">
            <div className="row">
              
              <div className="col-md-6">
                <form className="form-inline my-2 my-md-0 border-bottom">
                  <SearchBox placeholder='Search Furniture' handleChange={this.NameSearchHandleChange}/>
                </form>
              </div>
            
            </div>
            
            <div className="row">
              
              <div className="col-md-6 pt-3">
                <StylesChecklist handleChange={this.StyleSearchHandleChange}/>
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
          
          <CardList productName={productNameSearch}/>
        
        </section>
    
    )
  }
}

export default FurnitureFinder;

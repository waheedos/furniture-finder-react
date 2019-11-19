import React, {Component} from 'react';
import {FurnitureCardList} from "./component/furniture-card-list/furniture-card-list.component";
import {SearchFilter} from "./component/search-filter/search-filter.component";
import Select from 'react-select';

class FurnitureFinder extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      filteredProductData: [],
      Title: '',
      SearchName: '',
      SearchDeliveryTime: '',
      SearchStyle: '',
      selectedOptionDeliveryTime: null,
      selectedOptionFurnitureStyle: null
    };
  }
  
  dataFetch() {
    // fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
    // make local for https purpose
    fetch('./assets/data/data.json')
        .then(dataJSON => {
          if (dataJSON.status === 200) {
            return dataJSON.json()
          }
        })
        
        // .then( dataJSON => console.log(dataJSON));
        
        .then(dataJSON => {
          this.setState({
            productCategoryJSON: dataJSON['furniture_styles'],
            productData: dataJSON['products'],
            filteredProductData: dataJSON['products'],
            productStyle: dataJSON['products']['furniture_style']
          })
        })
  }
  
  componentDidMount() {
    this.dataFetch();
  };
  
  onSearchChange = keyEvent => {
    const {productData} = this.state;
    let keyTargetValue = keyEvent.target.value.toLowerCase();
    let filteredProductDataBySearchField = productData.filter(
        product => product['name'].toLowerCase().includes( keyTargetValue )
            ||
            product['description'].toLowerCase().includes( keyTargetValue )
            ||
            product['price'].toString().includes( keyTargetValue )
    );
    this.setState({
      filteredProductData: filteredProductDataBySearchField
    })
    
  };
  
  onDeliveryTimeSelectChange = keyEvent => {
    
    const {productData} = this.state;
    
    let deliveryOptionSelectedVal;
    
    let productDataFilteredByDeliveryTimeSelected;
    
    if (keyEvent !== null) {
      deliveryOptionSelectedVal = keyEvent.map(deliveryTime => deliveryTime.value);
      productDataFilteredByDeliveryTimeSelected = productData.filter(
          function (e) {
            return this.indexOf(e['delivery_time']) >= 0;
          },
          deliveryOptionSelectedVal
      );
      if (deliveryOptionSelectedVal === null || deliveryOptionSelectedVal.length === 0) {
        productDataFilteredByDeliveryTimeSelected = productData;
      }
    }
    
    else {
      productDataFilteredByDeliveryTimeSelected = productData;
    }
    
    this.setState({
      selectedOptionDeliveryTime: keyEvent,
      filteredProductData: productDataFilteredByDeliveryTimeSelected
    });
    // console.log("productDataDeliver", productData);
  };
  
  onFurnitureStyleSelectChange = keyEvent => {
    
    const {productData} = this.state;
    
    let furnitureStyleOptionSelectedVal;
    
    let productDataFilteredByFurnitureStyleSelected;
    
    if (keyEvent !== null) {
      furnitureStyleOptionSelectedVal = keyEvent.map(furnitureStyle => furnitureStyle.value);
      const furnitureStyleOptionSelectedValSet = new Set(furnitureStyleOptionSelectedVal);
      productDataFilteredByFurnitureStyleSelected = productData.filter(
          (product) => product['furniture_style'].some((furnitureStyle) => furnitureStyleOptionSelectedValSet.has(furnitureStyle))
      );
      if (furnitureStyleOptionSelectedVal === null || furnitureStyleOptionSelectedVal.length === 0) {
        productDataFilteredByFurnitureStyleSelected = productData;
      }
    }
    
    else {
      productDataFilteredByFurnitureStyleSelected = productData;
    }
    
    this.setState({
      selectedOptionFurnitureStyle: keyEvent,
      filteredProductData: productDataFilteredByFurnitureStyleSelected,
    });
    // console.log("furnitureStyleOptionSelectedVal", furnitureStyleOptionSelectedVal);
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
    
    const {productData, selectedOptionDeliveryTime, selectedOptionFurnitureStyle, filteredProductData} = this.state;
    
    let optionsDeliveryTime = [];
    
    let optionsFurnitureStyle = [];
    
    const deliveryTimeListSorted = FurnitureFinder.sortUnique(productData.map(products => products['delivery_time']));
    
    const furnitureStyleList = productData.map(products => products['furniture_style']);
    
    const furnitureStyleListMerged = [].concat.apply([], furnitureStyleList);
    
    const furnitureStyleListMergedSorted = FurnitureFinder.sortUnique(furnitureStyleListMerged.sort());
    deliveryTimeListSorted.map((value) => {
      optionsDeliveryTime.push({
        value: value,
        label: value > 1 ? value + " Days" : value + " Day"
      })
    });
    
    furnitureStyleListMergedSorted.map((value) => {
      optionsFurnitureStyle.push({
        value: value,
        label: value
      })
    });
    
    // console.log('deliveryTimeListSorted', deliveryTimeListSorted);
    // console.log('selectedOption', selectedOptionDeliveryTime);
    // console.log('furnitureStyleBef', furnitureStyleListMerged);
    // console.log('furnitureStyle', furnitureStyleListMergedSorted);
    
    return (
        
        <section>
          
          <nav className="nav navbar flex-column fixed-top-lg bg-primary p-4">
            <div className="row w-100">
              
              <div className="col-md-6">
                <h2 className='text-white my-2 my-md-0'>Furniture Finder</h2>
              </div>
              
              <div className="col-md-6">
                <form className="form-inline my-2 my-md-0 border-bottom">
                  <SearchFilter placeholder='Search Furniture' handleChange={this.onSearchChange}/>
                </form>
              </div>
            
            </div>
            
            <div className="row w-100">
              
              <div className="col-md-6 pt-3">
                <Select
                    classNamePrefix
                    placeholder='Furniture Styles'
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    isMulti
                    value={selectedOptionFurnitureStyle}
                    onChange={this.onFurnitureStyleSelectChange}
                    options={optionsFurnitureStyle}
                />
              </div>
              
              <div className="col-md-6 pt-3">
                <Select
                    placeholder='Delivery Time'
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    isMulti
                    value={selectedOptionDeliveryTime}
                    onChange={this.onDeliveryTimeSelectChange}
                    options={optionsDeliveryTime}
                />
              </div>
            
            </div>
          
          </nav>
          
          <FurnitureCardList
              productData={filteredProductData}
          />
        
        </section>
    
    )
  }
}

export default FurnitureFinder;

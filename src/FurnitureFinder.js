import React from 'react';

function FurnitureFinder() {
  return (
    
      <main>
      
        <div className="bg-primary p-4">
          <div className="row">
          
            <div className="col-6">
              <form className="form-inline my-2 my-lg-0 border-bottom">
                <input className="form-control" type="search" placeholder="Search Furniture" aria-label="Search"/>
              </form>
            </div>
        
          </div>
        
          <div className="row">
          
            <div className="col-6 pt-3">
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
          
            <div className="col-6 pt-3">
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
      
        <div className="container-fluid">
          <div className="row px-2 py-3 my-2">
          
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                
                  <div className="col-12 px-0 pb-2">
                    <div className="row">
                      <h4 className="card-title col-6">Product Name</h4>
                      <h5 className="card-subtitle text-warning col-6 text-right">Price</h5>
                    </div>
                  </div>
                
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                
                  <div className="col-12 px-0">
                    <div className="text-primary">Furniture Styles</div>
                  </div>
                
                  <div className="col-12 text-right px-0">
                    <a href="#" className="h6 mb-0" style={{'text-decoration':'underline !important;'}}>
                      Delivery Days
                    </a>
                  </div>
              
                </div>
              </div>
            </div>
          
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                
                  <div className="col-12 px-0 pb-2">
                    <div className="row">
                      <h4 className="card-title col-6">Product Name</h4>
                      <h5 className="card-subtitle text-warning col-6 text-right">Price</h5>
                    </div>
                  </div>
                
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                
                  <div className="col-12 px-0">
                    <div className="text-primary">Furniture Styles</div>
                  </div>
                
                  <div className="col-12 text-right px-0">
                    <a href="#" className="h6 mb-0" style={{'text-decoration':'underline !important;'}}>
                      Delivery Days
                    </a>
                  </div>
              
                </div>
              </div>
            </div>
        
          </div>
        </div>
    
      </main>
      
  );
}

export default FurnitureFinder;

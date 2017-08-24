import React from 'react';
import products from '../products';
import Result from './Result';
 

class  Results extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			foundProducts: props.products
		}
	}

 	 componentWillReceiveProps(nextProps){
 	 	 var foundProducts = nextProps.products.filter(product =>{
 	 	 	return product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
 	 	 	product.description.toLowerCase().match(nextProps.query.toLowerCase());
 	 	 });
 	 	 this.setState({
 	 	 	foundProducts: foundProducts
 	 	 });

 	 }
	render(){
		return(
			<div className="container">
				<div className="row">
			<div className="results">
			  {this.state.foundProducts.map(function(product, i){
			  		return(
			  			 <div className="col-md-3">
			  			 <Result product={product} key={i} />
			  			 </div>
			  			)
			  })}
				</div>
			</div>
		</div>
			)
	}
} 
 export default  Results;
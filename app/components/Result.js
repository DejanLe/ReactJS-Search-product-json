import React from 'react';

class Result extends React.Component{
	displayPrice(price){
		return(price / 100.00);
	}
	render(){
		return(

			<div>
				 <div className="in-stock">
							<div className="panel">
								<div className="panel panel-header">
									<img src={this.props.product.url} className="img-responsive center-block"/>
								</div>
								<div className="panel text-center">
									<h4><strong> {this.props.product.name}</strong> </h4> 
									<p>{this.props.product.description}</p>
									<button className="btn btn-success"><h3>Price: {this.displayPrice(this.props.product.price)} $ </h3></button>
								</div>	
						    </div>	
				 </div>	
					 	
				 
			</div>
			)
	}
}

export default Result;
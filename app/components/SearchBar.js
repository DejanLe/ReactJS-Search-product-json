import React from 'react';
import products from '../products';

 

 export default class  SearchBar extends React.Component{
 	handleQuery(event){
 		this.props.onQuery(event.target.value);
 		 
 	}
	render(){
		return(
			<div>
				 <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="#">Cleaning Product</a>
			        </div>
			        <div className="navbar-collapse collapse">
			          <form className="navbar-form navbar-right" role="form">
			             <div className="search-bar"> 
								<input onChange={this.handleQuery.bind(this)} 
								placeholder="Serach" /> 
						</div>
			          </form>
			        </div> 
			      </div>
			   </div>


			
			</div>
			)
	}
} 

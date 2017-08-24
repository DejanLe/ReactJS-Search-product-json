import React from 'react';
import ReactDOM from 'react-dom';  
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import Header from '../components/Header'; 
 

 class  App extends React.Component{
 constructor(props){
 	 	super(props);
 	 	this.state={
 	 		query: ''
 	 	};
 	 }

 	 handleQuery(query){

 	 	 this.setState({ 'query': query.toLowerCase().trim()})
 	 }

	render(){
		return(
			<div> 
			 
			 	<div className="search">
				 <SearchBar  onQuery={this.handleQuery.bind(this)}/>  
				 <Results products={this.props.products} query={this.state.query} />   
				</div> 
			
			</div>
			
			)
	}
} 
 export default App;
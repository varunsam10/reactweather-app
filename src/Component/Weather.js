import React, { Component } from 'react';


class Weather extends Component {
    render(){
        return (
            <div className="weather__info">

                {/* {this.props.city && this.props.country && <p>Location: {this.props.city}-{this.props.country}</p> }
                {this.props.temperature && <p>Temperature: {this.props.temperature} C</p> }
                {this.props.description && <p>Description: {this.props.description}</p> }
                {this.props.error && <p>Error: {this.props.error}</p> } */}

                {	
	 	this.props.city && this.props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { this.props.city }, { this.props.country }</span>
	 	</p> 
	 }
	 { 	
        this.props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { this.props.temperature }	</span>
	 	</p> 
	 }
	 { 	
        this.props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { this.props.description } </span>
	 </p> 
	 }
	 { 
        this.props.error && <p className="weather__error">{ this.props.error }</p>  
	 }
             </div>   
        );
    }
}

export default Weather;
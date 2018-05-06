import React, { Component } from 'react';


class Form extends Component {
    render(){
        return (
            <form onSubmit ={this.props.getWeather}>
                <input type="text" name="City" placeholder="Enter City...."/>
                <input type="text" name="Country" placeholder="Enter Country...."/>
                <button>Get Details</button>
            </form>   
        );
    }
}
 
export default Form;
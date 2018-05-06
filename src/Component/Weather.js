import React, { Component } from 'react';


class Weather extends Component {
    render(){
        return (
            <div>
                {this.props.temperature}
                {this.props.city}
                {this.props.country}
                {this.props.description}
                {this.props.error}
             </div>   
        );
    }
}

export default Weather;
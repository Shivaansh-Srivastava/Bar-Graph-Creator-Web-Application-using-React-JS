import React from "react";
import data from "./db";

class Information extends React.Component{
    render(){
        return(
            <div>
                <h3>Bar:</h3>
                <h3>Argument: {this.props.info.argument}</h3>
                <h3>Value: {this.props.info.value}</h3>
            </div>
        )
    }
}

export default Information
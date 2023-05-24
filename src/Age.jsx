import React from "react";

class Age extends React.Component{
    render(){
        if(this.props.age>18){
            var isBig = true;
        }
        return (
            <div>
            {isBig ? (
                <p>Your age is {this.props.age}</p>
                ) : (
                <p>You are very young!</p>
                )
            }
            </div>
        )
    }
}

export default Age
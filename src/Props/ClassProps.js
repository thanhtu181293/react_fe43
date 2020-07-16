import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        const {image, name, price} = this.props.obj;
        return (
            <div>
                <h2>StateFull component</h2>
                <div className="card text-left">
                    {/* nhận props image của component demoprops */}
                    <img className="card-img-top" 
                    src={image}
                    style = {{width : "400px"}} 
                    alt = "" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                    </div>
                </div>
            </div>
        )
    }
}

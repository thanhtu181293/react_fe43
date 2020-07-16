import React from 'react'

export default function FunctionProps(props) {
    const {image, name} = props.productPhone;
    return (
        <div>
            <h2>StartLess component</h2>
            <div className="card text-left">
                <img className="card-img-top" src={image} alt="" style={{width : "400px"}} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{props.productPhone.price}</p>
                </div>
            </div>
        </div>
    )
}

import React, { Component } from 'react'
import BT2Product from './BT2Product'

export default class BT2BodyProductList extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT2Product />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT2Product />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT2Product />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT2Product />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    renderProlist = () => {
        return this.props.proList.map((item, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <ProductItem objItem={item} handleSelectPro={this.props.handleSelectPro}  handleByuPro={this.props.handleByuPro} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderProlist()}
            </div>
        )
    }
}

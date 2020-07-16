import React, { Component } from 'react'
import BTProduct from './BTProductPhone'
import BTProductListPhone from './BTProductListPhone'
import BTProductListPC from './BTProductListPC'

export default class BTProductList extends Component {
    render() {
        return (
            <div>
                <BTProductListPhone  />
                <BTProductListPC />
            </div>
        )
    }
}

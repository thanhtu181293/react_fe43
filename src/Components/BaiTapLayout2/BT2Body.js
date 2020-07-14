import React, { Component } from 'react'
import BT2BodyBanner from './BT2BodyBanner'
import BT2BodyProductList from './BT2BodyProductList'

export default class BT2Body extends Component {
    render() {
        return (
            <div className="container">
                <BT2BodyBanner />
                <BT2BodyProductList />
            </div>
        )
    }
}

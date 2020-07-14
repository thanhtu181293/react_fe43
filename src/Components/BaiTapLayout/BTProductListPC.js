import React, { Component } from 'react'
import BTProductPC from './BTProductPC'

export default class BTProductListPC extends Component {
    render() {
        return (
            <section id="smartbook" className="container-fluid pt-5 pb-5">
                <h1 className="text-dark text-center">BEST SMARTBOOK</h1>
                <div className="row">
                    <BTProductPC />
                    <BTProductPC />
                    <BTProductPC />
                    <BTProductPC />
                </div>
            </section>
        )
    }
}

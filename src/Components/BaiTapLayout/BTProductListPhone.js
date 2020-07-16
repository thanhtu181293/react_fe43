import React, { Component } from 'react'
import BTProductPhone from './BTProductPhone'

export default class BTProductListPhone extends Component {
    state = {
        productList : [
            {
                image: "./img/sp_iphoneX.png",
                name: "iPhone X",
            },
            {
                image: "./img/sp_note7.png",
                name: "Note 7",
            },
            {
                image: "./img/sp_blackberry.png",
                name: "Blackberry",
            },
            {
                image: "./img/sp_vivo850.png",
                name: "Vivo850",
            }
    ]};

    renderProductList = () => {
        return this.state.productList.map((item, index) => {
            return (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" key={index}>
                    <BTProductPhone objPhone={item}/>
                </div>)
        })
    };

    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-light text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    {this.renderProductList()}
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        {id:1,name:'Iphone 2G',price:1000},
        {id:2,name:'Iphone 3G',price:2000},
        {id:3,name:'Iphone 8plus',price:3000},
    ]

    renderProductList = () => {
        // let arrProductJSX = [];
        
        // for (let item of this.productList) {
        //     let trProduct = <tr key={item.id}>
        //         <td>{item.id}</td>
        //         <td>{item.name}</td>
        //         <td>{item.price}</td>
        //         <td><button className="btn btn-danger">Delete</button></td>
        //     </tr>;
        //     arrProductJSX.push(trProduct);
        // }

        // arrProductJSX = this.productList.map((item, index) => {
        //     return <tr key={index}>
        //             <td>{item.id}</td>
        //             <td>{item.name}</td>
        //             <td>{item.price}</td>
        //             <td><button className="btn btn-danger">Delete</button></td>
        //         </tr>
        // })

        // return arrProductJSX;
        return this.productList.map((item, index) => {
            return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Product List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

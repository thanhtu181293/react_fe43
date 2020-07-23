import React, { Component } from 'react'
import data from './data.json';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

export default class ExampleCard extends Component {
    state = {
        proList : data,
        proSelected: null,
        cardList : [],
    }

    // xử lý tăng giảm số lượng
    tangGiamSoLuong = (maSP, tangGiam) => { // tang la true, giam la false
        // tim ra sp can tang giam so luong
        let cardListUpdate = [...this.state.cardList];

        let index = cardListUpdate.findIndex((item) => item.maSP === maSP)

        if (index >= 0) {
            if (tangGiam) {
                cardListUpdate[index].soLuong += 1;
            } else {
                if (cardListUpdate[index].soLuong === 1) {
                    cardListUpdate.splice(index, 1);
                } else {
                    cardListUpdate[index].soLuong -= 1;
                }
            }
        }
        this.setState({cardList: cardListUpdate})
    }

    handleSelectPro = (pro) => {
        this.setState({proSelected: pro})
    }

    handleByuPro = (card) => {
        // tạo cardList mới
        let cardListUpdate = [...this.state.cardList];

        let index = cardListUpdate.findIndex((item)=> item.maSP === card.maSP);

        if (index >= 0){
            cardListUpdate[index].soLuong += 1;
        } else {
            card.soLuong = 1;
            cardListUpdate = [...cardListUpdate, card];
        }

        //  setstate
        this.setState({cardList: cardListUpdate})
    }

    handleDelPro = (card) => {
        // tạo cardList mới
        debugger;
        let cardListUpdate = [...this.state.cardList];

        let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);

        cardListUpdate.splice(index, 1);

        //  setstate
        this.setState({cardList: cardListUpdate})
    }

    render() {
        return (
            <div className="container">
                <ProductCard tangGiamSoLuong={this.tangGiamSoLuong} cardList={this.state.cardList} handleDelPro={this.handleDelPro} />
                <ProductList proList={this.state.proList} handleSelectPro={this.handleSelectPro} handleByuPro={this.handleByuPro} />
                {this.state.proSelected ? (
                <div className="row">
                    <div className="col-sm-5">
                        <img className="img-fluid" src={this.state.proSelected.hinhAnh} />
                    </div>
                    <div className="col-sm-7">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{this.state.proSelected.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{this.state.proSelected.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{this.state.proSelected.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{this.state.proSelected.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{this.state.proSelected.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{this.state.proSelected.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                ): null}
            </div>
        )
    }
}

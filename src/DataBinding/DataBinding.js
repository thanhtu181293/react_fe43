import React, { Component } from 'react'
import styleDatabinding from './DataBinding.module.css';

export default class DataBinding extends Component {

    // binding thuộc tính sanPham
    sanPham = {
        ma: 1,
        tenSP: 'Iphone X',
        gia: 1000,
        hinhAnh: 'https://picsum.photos/200/300'
    }

    // binding phương thức
    renderThongTin = () => {
        return <div className="w-25">
                    <div className="card text-left">
                        <img className="card-img-top" src={this.sanPham.hinhAnh} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{this.sanPham.ma}</h4>
                            <p className="card-text">{this.sanPham.tenSP}</p>
                            <p className="card-text">{this.sanPham.gia}$</p>
                        </div>
                    </div>
                </div>
    }

    // phương thức render là có sẵn cửa component hiển thị giao diện
    render() {
        // binding dữ liệu là biến
        let title = "CYPERSOFT";
        // trang web random hinh anh
        let srcImg = `https://picsum.photos/200/300`
        let hocvien = {
            ma: 1,
            ten: 'nguyen van a'
        }

        // binding dữ liệu là hàm
        const renderImg = () => {
            // return <div><img src="https://picsum.photos/200/300" /></div>
            return (<div><img src={srcImg} /></div>)
        }

        return (
            <div className="container">
                {this.renderThongTin()}

                <h1 className="titleDemo" id="title">{title}</h1>
                <img src={srcImg}></img>
                <div className="card w-25">
                    <img className="card-img-top" src={srcImg} alt />
                    <div className="card-body">
                        <h4 className={`${styleDatabinding.header} card-title`}>{hocvien.ma}</h4>
                        <p className="card-text">{hocvien.ten}</p>
                    </div>
                </div>
                <div className="container">
                    {renderImg()}
                </div>
            </div>
        )
    }
}

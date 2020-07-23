import React, { Component } from 'react'
import SanPham from './SanPham'
import {connect} from 'react-redux';

class DanhSachSanPham extends Component {

    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham} />
            </div>
        })
    }

    render() {
        
        return (
            <div>
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()} 
                </div>
                <div className="row">
                    <div className="col-4">
                        <img style={{height:350}} src={this.props.spChiTiet.hinhAnh} alt=""/>
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Ten SP</td>
                                    <td>{this.props.spChiTiet.tenSP}</td>
                                </tr>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{this.props.spChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{this.props.spChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{this.props.spChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{this.props.spChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{this.props.spChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{this.props.spChiTiet.rom}</td>
                                </tr>
                                <tr>
                                    <td>Giá</td>
                                    <td>{this.props.spChiTiet.giaBan}$</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

// Đây là hàm lấy state từ redux chuyển thành props của component
const mapStateToProps = state => {  // state là rootReducer
    return {
        spChiTiet : state.stateBaiTapGioHang.spChiTiet
    }
}

export default connect(mapStateToProps)(DanhSachSanPham)
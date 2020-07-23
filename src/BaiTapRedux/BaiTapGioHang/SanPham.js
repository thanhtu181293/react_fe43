import React, { Component } from 'react'
import {connect} from 'react-redux';

class SanPham extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card text-left">
                <img style={{height:350}} className="card-img-top" src={sanPham.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button onClick={()=>{
                        this.props.xemChiTiet(sanPham)
                    }} className="btn btn-success">Xem chi tiết</button>
                    <button className="btn btn-danger">Mua</button>
                </div>
            </div>
        )
    }
}

// hàm lấy giá trị callback từ store về để đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
    return {
        xemChiTiet : (sanPham) => { // định nghĩa 1 props cho component này là 1 hàm.
            // dùng hàm dispatch của redux đưa sản phẩm lên tất cả reducer
            console.log("sp duoc click : ",sanPham);

            // dùng hàm dispatch từ redux trả ra => đưa dữ liệu len reducer xử lý
            const action = {
                type : 'XEM_CHI_TIET', // Gía trị bắt buộc phải có
                sanPham
            }
            dispatch(action); // gửi lên reducer
        }
    }
}

export default connect (null, mapDispatchToProps)(SanPham)
import React, { Component } from 'react'
import Form_valication from './Form_valication'
import { connect } from 'react-redux'

class QLSV extends Component {

    renderTable = () => {
        return this.props.mangNguoiDung.map((item, index) => {
            return (
                <tr key={index}>
                <td>{item.taiKhoan}</td>
                <td>{item.matKhau}</td>
                <td>{item.hoTen}</td>
                <td>{item.email}</td>
                <td>{item.soDt}</td>
                <td>{item.maNhom}</td>
                <td></td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="container">
                <Form_valication />
                <table class="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Mã Nhóm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {...state}
// }

function mapStateToProps (state) {
    return { mangNguoiDung : state.QLSVReducer.mangNguoiDung }
}

export default connect(mapStateToProps,null)(QLSV)
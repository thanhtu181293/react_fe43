import React, { Component } from 'react'
import { connect } from 'react-redux';

class Form_valication extends Component {

    state = {
        values : {
            taiKhoan : '',
            hoTen : '',
            matKhau : '',
            email : '',
            soDt : '',
            maNhom : ''
        },
        errors : {
            taiKhoan : '',
            hoTen : '',
            matKhau : '',
            email : '',
            soDt : '',
            maNhom : ''
        }
    }

    handleChange = (event)=>{
        // let value = event.target.value;
        let {name, value} = event.target;

        let newValue = {...this.state.values, [name]: value};

        // Các thuộc tính nằm trên thẻ gọi là attribute
        // Các thuộc tính cửa đối tượng thẻ sau khi dom gọi là property
        let label = event.target.getAttribute('label');
        let type = event.target.getAttribute('type');

        // kiểm tra rỗng
        let errorMess = '';
        if (value.trim() === ''){
            errorMess = `${label} không được bỏ trống!`;
        } 
        else {
            // kiểm tra định dạng
            if (type === 'phone') {
                let regexNumber = /^[0-9]+$/;
                if (!regexNumber.test(value)) {
                    errorMess = `${label} chỉ được phép nhập số!`;
                }
            }
            if (type === 'email') {
                const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regexEmail.test(value)) {
                    errorMess = `${label} không hợp lệ!`;
                }
            }
        }

        let newErrors = {...this.state.errors, [name]: errorMess};

        this.setState({
            values : newValue,
            errors : newErrors
        })
    }

    handleSubmit = (event) => {
        // ngăn sự kiện reload của form
        event.preventDefault();
        let valid = true;
        let {values, errors} = this.state;
        for (let key in values) {
            if (values[key].trim() === '') {
                alert("dữ liệu không hợp lệ");
                return;
            }
        }
        for (let key in errors) {
            if (errors[key].trim() !== '') {
                alert("dữ liệu không hợp lệ");
                return;
            }
        }

        this.props.dispatch({
            type: "THEM_ND", 
            nguoiDung: this.state.values,
        });
    }

    render() {
        return (
            <div className="card text-white bg-white text-dark">
                <div className="card-header text-center bg-dark text-light"><h1>From Đăng Ký</h1></div>
                <div className="card-body">    
                    <form className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Tài Khoản</p>
                                    <input label="Tài Khoản" className="form-control" name="taiKhoan" onChange={this.handleChange}/>
                                    <p className="text text-danger">{this.state.errors.taiKhoan}</p>
                                </div>
                                <div className="form-group">
                                    <p>Mật Khẩu</p>
                                    <input label="Mật Khẩu" className="form-control" name="matKhau" onChange={this.handleChange}/>
                                    <p className="text text-danger">{this.state.errors.matKhau}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số Điện Thoại</p>
                                    <input type="phone" label="Số Điện Thoại" className="form-control" name="soDt" onChange={this.handleChange}/>
                                    <p className="text text-danger">{this.state.errors.soDt}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Họ Tên</p>
                                    <input label="Họ Tên" className="form-control" name="hoTen" onChange={this.handleChange}/>
                                    <p className="text text-danger">{this.state.errors.hoTen}</p>
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type="email" label="Email" className="form-control" name="email" onChange={this.handleChange}/>
                                    <p className="text text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <p>Mã Nhóm</p>
                                    <input label="Mã Nhóm" className="form-control" name="maNhom" onChange={this.handleChange}/>
                                    <p className="text text-danger">{this.state.errors.maNhom}</p>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success" onClick={this.handleSubmit}>Đăng Ký</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null)(Form_valication)
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {datCuoc} from '../../actions/GameBauCuaAction'

class DanhSachDatCuoc extends Component {
    renderDanhSach = () => {
        return this.props.danhSachCuoc.map((item, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={item.hinhAnh} alt="Card cap" style={{ height: 200 }} />
                    <div className="card-body">
                        <h5 className="card-title" />
                        <div className="d-flex justify-content-around align-items-center">
                            <button className="btn btn-info"
                            onClick={()=>{
                                this.props.datCuoc(item.ma, false);
                            }}>-</button>
                            <span>{item.giaCuoc}$</span>
                            <button className="btn btn-info"
                            onClick={()=>{
                                this.props.datCuoc(item.ma, true);
                            }}>+</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                    {this.renderDanhSach()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachCuoc : state.GameBauCuaReducer.danhSachCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc : (ma, cuoc) => {
            dispatch(datCuoc(ma, cuoc));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachDatCuoc)
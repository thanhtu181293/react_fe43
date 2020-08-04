import React, { Component } from 'react';
import './style.css';
import DanhSachDatCuoc from './DanhSachDatCuoc';
import XucXac from './XucXac';
import {connect} from 'react-redux';
class GameBauCua extends Component {
    render() {
        return (
            <div className="bau-cua">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bau-cua__tien font-weight-bold">Tổng Tiền : {this.props.tongTien}$</div>
                        <h2 className="text-center text-danger">Bầu Cua</h2>
                        <div><button className="btn btn-info"
                        onClick={()=>{
                            this.props.choiGame()
                        }}>Chơi Game</button></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <DanhSachDatCuoc />
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <XucXac />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



const mapStateToProps = (state) => {
    return {
        tongTien : state.GameBauCuaReducer.tongTien,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        choiGame : () => {
            let xucXac1 = Math.floor(Math.random() * 5);
            let xucXac2 = Math.floor(Math.random() * 5);
            let xucXac3 = Math.floor(Math.random() * 5);
            const action = {
                type : 'CHOI_GAME',
            }
            dispatch(action);
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {datCuoc} from '../../../utils/GameXiNgauAction'

class DieuKien extends Component {
    render() {
        return (
            <div className="xi-ngau__control row text-center mt-4">
                <div className="col-4">
                    <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }}>
                        <img src="./img/tai.PNG" alt="tai" />
                    </button>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around">
                    <span><i className="fa fa-dice-one" style={{ color: 'white', fontSize: 150 }} /></span>
                    <span><i className="fa fa-dice-two" style={{ color: 'white', fontSize: 150 }} /></span>
                    <span><i className="fa fa-dice-six" style={{ color: 'white', fontSize: 150 }} /></span>
                </div>
                <div className="col-4">
                    <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }}>
                        <img src="./img/xiu.PNG" alt="xiu" />
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taiXiu : state.GameXiNgauReducer.taiXiu,
        soBanThang : state.GameXiNgauReducer.soBanThang,
        soBanThua : state.GameXiNgauReducer.soBanThua,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc : (chon) => {
            dispatch(datCuoc(chon));
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(DieuKien);

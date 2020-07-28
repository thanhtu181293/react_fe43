import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => {
        return this.props.xucXac.map((item, index) => {
            return (
                <div key={index} className={`bau-cua__xoay bau-cua__xoay--${index + 1}`}>
                    <img src={item.hinhAnh} alt="hinhanh" />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        xucXac : state.GameBauCuaReducer.xucXac
    }
}

export default connect(mapStateToProps, null)(XucXac)
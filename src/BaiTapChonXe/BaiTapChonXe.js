import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        src : './img/red-car.jpg'
    }

    changeColor = (color) => {
        let newState = {
            src : color === this.state.src ? './img/steel-car.jpg' : color
        }
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>Please choose your favorite about car's color</p>
                            <img className="w-100" src={this.state.src} alt=""/>
                        </div>
                        <div className="col-6">
                            <p>Change color</p>
                            <div className="row text-center">
                                <div className="col-4">
                                    <button className="btn btn-danger" onClick={()=>{
                                        this.changeColor('./img/red-car.jpg');
                                    }}>Red Color</button>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-secondary" onClick={()=>{
                                        this.changeColor('./img/silver-car.jpg');
                                    }}>silver Color</button>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-dark" onClick={()=>{
                                        this.changeColor('./img/black-car.jpg');
                                    }}>Black Color</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
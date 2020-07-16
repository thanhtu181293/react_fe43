import React, { Component } from 'react';
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps';

export default class DemoProps extends Component {
    render() {
        const car = {
            image:"./img/red-car.jpg",
            name:"lambogini",
            price:1000
        };

        const phone = {
            image:'./img/sp_iphoneX.png',
            name:"Iphone X",
            price:2000
        }

        return (
            <div>
                demo props
                {/* truyền props image cho component classprops */}
                <ClassProps obj={car} />
                <FunctionProps productPhone={phone}/>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = () => {
        alert('hello fe43');
    }

    showMessage = (mess) => {
        alert("hello " + mess);
    }

    render() {
        return (
            <div>
                <h3>cách 1: truyền callback function xử lý sự kiện</h3>
                <button className="btn btn-danger" onClick={this.handleClick}>click me 1</button>
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={this.showMessage.bind(this,"fe43")}>showMessage 1</button>
                <hr/>
                <h3>cách 2: dùng arrowfunction</h3>
                <button className="btn btn-warning" onClick = {() => {
                    this.showMessage("cybersoft");
                }}>click me 2</button>
            </div>
        )
    }
}

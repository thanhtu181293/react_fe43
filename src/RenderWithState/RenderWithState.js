import React, { Component } from 'react'

export default class RenderWithState extends Component {

    // this.state: thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên gian diện
    
    // Điều kiện lưu trữ state:
    // 1. chứa giao diện được binding từ state (trực tiếp hoặc gián tiến)
    // 2. chứa nút xử lí làm thay đổi state đó (trực tiếp hoặc gián tiếp)
    state = {
        isLogin : false,
    }

    userName = 'tu-tt';

    renderContent = () => {
        if (this.state.isLogin) {
            return (<div><p>hello {this.userName}</p><button onClick = {()=>{
                this.logout();
            }}>Logout</button></div>);
        }
        return <button onClick = {()=>{
            this.login();
        }}>Login</button>
    }

    logout = () => {
        let newState = {
            isLogin : false
        }

        // phương thức this.setState là 1 phương thức có sẵn của component làm 2 nhiệm vụ.
        // 1: thay đổi giá trị state 
        // 2: gọi this.render lại giao diện
        this.setState(newState,()=>{
            console.log(this.state.isLogin);
        });
    }

    login = () => {
        let newState = {
            isLogin : true
        }

        // phương thức this.setState là 1 phương thức có sẵn của component làm 2 nhiệm vụ.
        // 1: thay đổi giá trị state 
        // 2: gọi this.render lại giao diện
        this.setState({isLogin : true});
    }

    render() {
        return (
            <div>
                {/* {this.isLogin ? <p>hello {this.userName}</p> : <button>Login</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}

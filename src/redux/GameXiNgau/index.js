import React, { Component } from 'react'
import DieuKien from './DieuKien'
import KetQua from './KetQua'
import Choi from './Choi'

export default class GameXiNgau extends Component {
    render() {
        return (
            <section className="xi-ngau" style={{ background: 'url(./img/bg.jpg)', height: '100vh', overflowX: 'hidden' }}>
                <h1 className="text-center" style={{ color: 'white', fontWeight: 'bold', fontSize: 50 }}>
                    Game Tài Xỉu
                </h1>
                <DieuKien />
                <KetQua />
                <Choi />
            </section>
        )
    }
}

import {getRandomInit} from '../../utils/randomInit'
import * as actionConstants from '../constants/GameBauCuaConst'

const initialState = {
    tongTien: 100,
    danhSachCuoc : [
        {ma:'bau', hinhAnh:'./img/bau.png', giaCuoc: 0},
        {ma:'cua', hinhAnh:'./img/cua.png', giaCuoc: 0},
        {ma:'ca', hinhAnh:'./img/ca.png', giaCuoc: 0},
        {ma:'ga', hinhAnh:'./img/ga.png', giaCuoc: 0},
        {ma:'nai', hinhAnh:'./img/nai.png', giaCuoc: 0},
        {ma:'tom', hinhAnh:'./img/tom.png', giaCuoc: 0}
    ],
    xucXac : [
        {ma:'bau', hinhAnh:'./img/bau.png', giaCuoc: 0},
        {ma:'bau', hinhAnh:'./img/bau.png', giaCuoc: 0},
        {ma:'bau', hinhAnh:'./img/bau.png', giaCuoc: 0},
    ]
}

const GameBauCuaReducer = (state = initialState, action) => {
    switch(action.type){
        case actionConstants.DAT_CUOC: {
            let { tongTien } = state;
            let danhSachCuoc = [ ...state.danhSachCuoc ];
            let index = danhSachCuoc.findIndex((item) => item.ma === action.ma);
            if (index >= 0){
                if (action.cuoc) {
                    if (tongTien > 0) {
                        danhSachCuoc[index].giaCuoc += 10;
                        tongTien -= 10;
                    }
                } else {
                    if (danhSachCuoc[index].giaCuoc > 0) {
                        danhSachCuoc[index].giaCuoc -= 10;
                        tongTien += 10;
                    }
                }
            }
            // state.danhSachCuoc = danhSachCuoc;
            // state.tongTien = tongTien;
            // return { ...state }
            

            return { ...state, danhSachCuoc, tongTien }
        }
        case 'CHOI_GAME': {
            let { tongTien } = state
            let danhSachCuoc = [ ...state.danhSachCuoc ];

            let xucXac = [
                danhSachCuoc[getRandomInit(6)],
                danhSachCuoc[getRandomInit(6)],
                danhSachCuoc[getRandomInit(6)],
            ];

            for(let ele of danhSachCuoc){
                let traTien = xucXac.find((item) => ele.ma === item.ma);
                if (traTien) {
                    tongTien += ele.giaCuoc;
                } 
            }

            tongTien += xucXac.reduce((tienCuoc, item, index) => {
                return tienCuoc += item.giaCuoc;
            },0)

            
            danhSachCuoc = danhSachCuoc.map(item => ({
                ...item,
                giaCuoc: 0
            }))

            return { ...state, xucXac, danhSachCuoc, tongTien }
        }
        default : break;
    }
    return { ...state };
}

export default GameBauCuaReducer
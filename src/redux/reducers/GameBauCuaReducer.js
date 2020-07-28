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
        case 'DAT_CUOC': {
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
            // let xucXac = [ ...state.xucXac];
            // let xucXac = state.danhSachCuoc.map((item, index) => {
            //     if (action.xucXac1 === index) {
            //         return {...state.danhSachCuoc[index]}
            //     }
            // })
            console.log('choi game');
            break;
        }
        default : break;
    }
    return { ...state };
}

export default GameBauCuaReducer
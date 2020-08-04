import { DAT_CUOC } from "../constants/GameBauCuaConst";

const danhSachXucXac = [
        { ma: "one", classes: "fa fa-dice-one", so: 1 },
        { ma: "two", classes: "fa fa-dice-two", so: 2 },
        { ma: "three", classes: "fa fa-dice-three", so: 3 },
        { ma: "four", classes: "fa fa-dice-four", so: 4 },
        { ma: "five", classes: "fa fa-dice-five", so: 5 },
        { ma: "six", classes: "fa fa-dice-six", so: 6 },
    ];

const initialState = {
    xucXac : [
        { ma: "one", classes: "fa fa-dice-one", so: 1 },
        { ma: "two", classes: "fa fa-dice-two", so: 2 },
        { ma: "three", classes: "fa fa-dice-three", so: 3 },
    ],
    taiXiu: false,
    soBanThang: 0,
    soBanThua: 0,
}

const GameXiNgauReducer = (state = initialState, action) => {
    switch(action.type){
        case DAT_CUOC:{
            return { ...state, taiXiu : action.type};
        }
    }
    return {...state}
}

export default GameXiNgauReducer;
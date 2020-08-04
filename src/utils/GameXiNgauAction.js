import * as taiXiu from '../redux/constants/GameXiNgauConst'

export function datCuoc(selected){
    return {
        type : taiXiu.DAT_CUOC,
        selected,
    }
}
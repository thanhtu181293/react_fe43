import {DAT_CUOC} from '../constants/GameBauCuaConst';

export function datCuoc(ma, cuoc) {
    return {
        type : DAT_CUOC,
        ma,
        cuoc,
    };
}
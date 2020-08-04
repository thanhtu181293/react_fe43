import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import GameBauCuaReducer from './GameBauCuaReducer'
import GameXiNgauReducer from './GameXiNgauReducer'
import QLSVReducer from './QLSVReducer'

// Store tổng cửa ứng dụng chứa tất cả các state cửa ứng dụng
const rootReducer = combineReducers({
    // Nơi khai báo các state theo từng nghiệp vụ
    stateBaiTapGioHang: BaiTapGioHangReducer,
    GameBauCuaReducer,
    GameXiNgauReducer,
    QLSVReducer,
})

export default rootReducer;
const initialState = {
    mangNguoiDung : [
        {taiKhoan:'123',matKhau:'123',email:'123@123.com',soDt:'123',hoTen:'456',maNhom:'gp01'},
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "THEM_ND" : {
            let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung]
            return {...state, mangNguoiDung: mangNguoiDungUpdate}
        }
        default:
            return state;
    }
}

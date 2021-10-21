import { ThongTinLichChieu } from "../../_core/models/ThongTinLichChieu";
import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../actions/types/QuanLyDatVeType";

const stateDefault = {
    chiTietPhongVe : new ThongTinLichChieu(),
    danhSachGheDangDat : [], //danh sách ghế đăng đặt
    danhSachGheKhachDat : [],
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_CHI_TIET_PHONG_VE : {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return {...state}
        }

        case DAT_VE : {
            //Cập nhật danh sách ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDangDat.maGhe);
            if(index!=-1) {
                //Nếu tìm thấy ghế được chọn trong mảng tức là trước đó đã click vào rồi => xóa đi
                danhSachGheCapNhat.splice(index,1)
            }else {
                danhSachGheCapNhat.push(action.gheDangDat)
            }
            console.log(action)
            return {...state,danhSachGheDangDat:danhSachGheCapNhat}
        }

        default : return {...state};
    }
}
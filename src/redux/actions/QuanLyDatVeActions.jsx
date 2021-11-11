import { result } from "lodash";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";


export const layChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            if(result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe : result.data.content
                });
            }
            // console.log('result',result)
        } catch(error) {
            console.log('errors',error)
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction);

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            //Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            console.log(result.data.content)
            await dispatch({type:DAT_VE_HOAN_TAT});
            await dispatch(hideLoadingAction);
            dispatch({type:CHUYEN_TAB})

        }catch(error){
            console.log('error',error);
            dispatch(hideLoadingAction);
        }
    }
}
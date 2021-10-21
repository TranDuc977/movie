import { quanLyPhimService } from '../../services/QuanLyPhimService';
import { SET_HE_THONG_RAP_CHIEU,SET_CHI_TIET_PHIM } from './types/QuanLyRapType';
import { DOMAIN, GROUPID } from "../../util/settings/config";
import axios from "axios";

export const layDanhSachHeThongRapAction = () => {

    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`,
                method: 'GET'
            });
            // const result = await quanLyPhimService.layDanhSachHeThongRap();
            console.log('result',result.data.content);
            dispatch({
                type: SET_HE_THONG_RAP_CHIEU,
                heThongRapChieu: result.data.content
            })
            console.log(result.data.content);
        }catch(errors) {
            console.log('errors',errors.response?.data)
        }
    }
    
};

export const layThongTinChiTietPhim = (maPhim) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            //Lấy được dữ liệu từ api về => reducer
            console.log('result',result);

            dispatch({
                type: SET_CHI_TIET_PHIM,
                filmDetail: result.data.content,
            })
        }catch(errors) {
            console.log('errors',errors.response?.data)
        }
    }
}
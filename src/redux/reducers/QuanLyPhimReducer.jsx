import { SET_DANH_SACH_PHIM,SET_FILM_DANG_CHIEU,SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM, } from "../actions/types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 5104,
            "tenPhim": "sdasd",
            "biDanh": "sdasd",
            "trailer": "https://www.youtube.com/embed/Fp9pNPdNwjI",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/sdasd_gp01.png",
            "moTa": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-09-24T20:12:41.303",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "maPhim": 5104,
            "tenPhim": "sdasd",
            "biDanh": "sdasd",
            "trailer": "https://www.youtube.com/embed/Fp9pNPdNwjI",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/sdasd_gp01.png",
            "moTa": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-09-24T20:12:41.303",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          
    ],
    dangChieu: true,
    sapChieu:true,
    arrFilmDefault: [],
    filmDetail: {},

    thongTinPhim: {}

};

export const QuanLyPhimReducer = (state=stateDefault,action) => {
    switch(action.type) {
        case SET_DANH_SACH_PHIM : {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return {...state}
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu );
            return {...state}
        }
        case SET_FILM_SAP_CHIEU : {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu );
            return {...state}
        }
        case SET_CHI_TIET_PHIM : {
            state.filmDetail = action.filmDetail;
            return {...state};
        }
        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }

        default : return {...state}
    }
}
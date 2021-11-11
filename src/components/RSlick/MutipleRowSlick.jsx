import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from './MutipleRowSlick.module.css';
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from '../../redux/actions/types/QuanLyPhimType';
import { useDispatch, useSelector } from 'react-redux'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", color: 'black', marginRight: '-25px', marginTop:'-10px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", color: 'black', marginTop:'-10px'}}
            onClick={onClick}
        />
    );
}

const MultipleRows = (props) => {
    const { arrFilm } = props;
    const dispatch = useDispatch();
    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer);

    const renderFilm = () => {
        return arrFilm.map((item, index) => {
            return <div  className={`${styleSlick['width-item']}`} key={index}>
                {/* <Film phim={item}/> */}
                <Film_Flip item={item} />
            </div>
        })
    }

    const settings = {
        className: "slider variable-width",
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';

    let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';

    return (
        <div className="w-full">
            <button className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 border-gray-800 border`} onClick={() => {
                const action = { type: SET_FILM_DANG_CHIEU }
                dispatch(action);
            }}>PHIM ĐANG CHIẾU</button>
            <button className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`} onClick={() => {
                const action = { type: SET_FILM_SAP_CHIEU }
                dispatch(action);
            }}>PHIM SẮP CHIẾU</button>
            <Slider {...settings}>
                {renderFilm()}
            </Slider>
        </div>
    );
}

export default MultipleRows;
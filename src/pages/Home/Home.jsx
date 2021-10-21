import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux';
import { QuanLyPhimReducer } from '../../redux/reducers/QuanLyPhimReducer';
import Film from '../../components/Film/Film';
import MultipleRows from '../../components/RSlick/MutipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/HomeCarousel/HomeCarousel';

export default function Home(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    console.log('hethongrapchieu:',heThongRapChieu)

    // const renderPhim = () => {
    //     return arrFilm.map((item, index) => {
    //         return (
    //             <Film key={index}/>
    //         )
    //     })
    // }

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action); //dispatch function từ thunk

        dispatch(layDanhSachHeThongRapAction());
    }, []);

    return (
        <div>
             <HomeCarousel/>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className='w-4/5 mx-auto'>
                        <MultipleRows arrFilm={arrFilm} />
                    </div>

                    {/* <div  className="flex flex-wrap " style={{ justifyContent: 'center' }}>
                        {renderPhim()};
                    </div> */}
                </div>
            </section>

            <HomeMenu heThongRapChieu={heThongRapChieu}/>
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { AppleOutlined, FacebookOutlined } from '@ant-design/icons'

export default function Footer(props) {
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const arrHeThongRap = _.map(heThongRapChieu, (heTHongRap) => _.pick(heTHongRap, ['maHeThongRap', 'tenHeThongRap', 'logo']));

    
    return (
        <footer className="py-6 bg-coolGray-100 text-coolGray-900 bg-gray-800">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-3">
                        <a href="#" className="flex justify-center space-x-3 md:justify-start text-black">
                            <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberlearn.vn" />
                        </a>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3 text-gray-200">
                        <p className="pb-1 text-lg font-medium text-gray-200">TIX</p>
                        <div className="grid grid-cols-6 text-gray-200">
                            <div className="col-span-3 ">FAQ</div>
                            <div className="col-span-3">Thỏa thuận sử dụng</div>
                            <div className="col-span-3 ">Chính sách bảo mật</div>
                        </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                    <p className="pb-1 text-lg font-medium text-gray-200">Partner</p>
                        <div className="grid grid-cols-8" style={{color : 'fff'}}>
                        {arrHeThongRap.map((htr,index) => {
                            return <div key={index}>
                                <img src={htr.logo} style={{width:30, height:30}}/>
                            </div>
                        })}
                        </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
                        <p className="pb-1 text-lg font-medium text-gray-200">Mobile app</p>
                        <div className="flex text-white">
                            <div className="mr-5">
                            <AppleOutlined className="text-3xl text-gray-200" /> 
                            </div>
                            <div>
                            <FacebookOutlined className="text-3xl text-gray-200"/>
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between text-gray-200">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span >©2021 All rights reserved</span>
                    </div>

                    <div className="">
                    </div>
                </div>
            </div>
        </footer>

    )
}

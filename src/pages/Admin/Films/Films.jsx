import React, { useEffect, Fragment } from "react";
import { Table, Input, Button } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction, xoaPhimAction } from "../../../redux/actions/QuanLyPhimAction";
import { NavLink } from 'react-router-dom';
import {history} from '../../../App';
const { Search } = Input;


export default function Films(props) {

  const { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  console.log('arr:', arrFilmDefault);

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  },[]);


  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      sorter: (a,b) => a.maPhim - b.maPhim,
      sortDirections: ['descend', 'ascend'],
      width: "15%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhanh",
      render: (text, film, index) => {
        return <Fragment>
            <img src={film.hinhAnh} alt={film.tenPhim} width={50} style={{height : '50px'}} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
        </Fragment>
    },
      with: '15%'
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a,b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if(tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend','ascend'],
      width: '25%'
    },
    {
      title: 'Mô Tả',
      dataIndex: 'mota',
      render: (text,film) => {
        return <Fragment>
          {film.moTa.length > 50 ? film.moTa.substr(0,50) + '...' : film.moTa}
        </Fragment>
      },
      sortDirections: ['descend','ascend'],
      width: '25%'
    },
    {
      title: 'Hành Động',
      dataIndex: 'maPhim',
      render : (text,film) => {
        return <Fragment>
          <NavLink key={1} className=" mr-2  text-2xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined/></NavLink>
          <span style={{ cursor: 'pointer' }} key={2} className="text-2xl" onClick={() => {
                        //Gọi action xoá
                        if (window.confirm('Bạn có chắc muốn xoá phim ' + film.tenPhim)) {
                            //Gọi action
                            dispatch(xoaPhimAction(film.maPhim));
                        }
                    }}><DeleteOutlined style={{ color: 'red' }} />
           </span>
           <NavLink key={1} className=" mx-2 text-2xl" to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`} onClick={()=>{
                        localStorage.setItem('filmParams',JSON.stringify(film));
                    }}><CalendarOutlined style={{ color: 'green' }} />
           </NavLink>
        </Fragment>

      }
    }
  ];
  const data = arrFilmDefault;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = value => {
    console.log(value);
    //Gọi api layDanhSachPhim
    dispatch(layDanhSachPhimAction(value));

};

  return (
    <div className="container">
      <h3 className="text-4xl">Quản lý Phim</h3>
      <Button className="mb-5" onClick={() => {
        history.push('/admin/films/addnew')
      }}>Thêm phim</Button>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange()} rowKey={"maPhim"} />
    </div>
  );
}

import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { Select } from "antd";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";

// const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-4 py-3 text-gray-200 border-r border-gray-200  rounded-l"
          >
            Đăng nhập
          </button>
          <button
            onClick={() => {
              history.push("/home");
            }}
            className="self-center px-4 rounded text-gray-200"
          >
            Đăng kí
          </button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        {" "}
        <button
          onClick={() => {
            history.push("/profile");
          }}
          className="self-center px-4 py-3 rounded-l border-r text-gray-200 border-gray-200 flex items-center"
        > 
          <img src="https://tix.vn/app/assets/img/avatar.png" alt="..." style={{width: 30,borderRadius:'25px',marginRight:"5px"}}/>
          <div>{userLogin.taiKhoan}</div>
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push('/');
            window.location.reload();
          }} className=" mr-5 px-4 text-gray-200"
        >
          Đăng xuất
        </button>
      </Fragment>
    );
  };

  return (
    <div className="container">
      <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-10">
        <div
          className="container flex justify-between h-16 mx-auto"
          style={{ maxWidth: "1280px" }}
        >
          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt="cyberlearn.vn"
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/home"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-200  border-violet-600 "
                activeClassName="border-b-2 border-gray-200"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/admin"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-200"
                activeClassName="border-b-2 border-white"
              >
                Admin
              </NavLink>
            </li>
            <li className="flex">
              {/* <NavLink
                to="news"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                activeClassName="border-b-2 border-white"
              >
                News
              </NavLink> */}
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {renderLogin()}
            {/* <Select
                defaultValue="en"
                style={{ width: 100 }}
                onChange={handleChange}
              >
                <Option value="en">Eng</Option>
                <Option value="chi">Chi</Option>

                <Option value="vi">Vi</Option>
              </Select> */}
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

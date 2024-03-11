import React from 'react';
import logo from '../../assets/images/logo.svg'
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
    return (
        <div>
          <div className="header-margin h-20"></div>
          <header className="bg-[#13357b] text-white fixed top-0 left-0 right-0 h-20 flex items-center">
              <div className="header-container px-32 w-full">
                  <div className="flex justify-between items-center">
                    <div className="col-auto">
                      <div className="flex items-center">
                        <a href="/" className="header-logo mr-20 flex items-center">
                          <img src={logo}/>
                        </a>
                        <div className="header-menu">
                          <div className="header-menu__content">
                            <nav className="menu">
                              <ul className="menu__nav flex">
                                <li className=" menu-item-has-children relative mr-8">
                                  <a href="#" className="flex items-center px-2 py-3">
                                    <span className="mr-3">Home</span><FaAngleDown />
                                  </a>
                                  <ul className="subnav absolute bg-slate-500 hidden">
                                    <li className=""><a href="/">Home 01</a></li>
                                    <li className=""><a href="/home_2">Home 02</a></li>
                                    <li className=""><a href="/home_3">Home 03</a></li>
                                    <li className=""><a href="/home_4">Home 04</a></li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children relative mr-8">
                                  <a href="#" className="flex items-center px-2 py-3">
                                    <span className="mr-3">Categories</span><FaAngleDown />
                                  </a>
                                  <ul className="subnav absolute bg-slate-500 hidden">
                                    <li className=""><a href="/">Home 01</a></li>
                                    <li className=""><a href="/home_2">Home 02</a></li>
                                    <li className=""><a href="/home_3">Home 03</a></li>
                                    <li className=""><a href="/home_4">Home 04</a></li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children relative mr-8">
                                  <a href="#" className="flex items-center px-2 py-3">
                                    <span className="mr-3">Pages</span><FaAngleDown />
                                  </a>
                                  <ul className="subnav absolute bg-slate-500 hidden">
                                    <li className=""><a href="/">Home 01</a></li>
                                    <li className=""><a href="/home_2">Home 02</a></li>
                                    <li className=""><a href="/home_3">Home 03</a></li>
                                    <li className=""><a href="/home_4">Home 04</a></li>
                                  </ul>
                                </li>
                                <li className=" menu-item-has-children relative mr-8">
                                  <a href="#" className="flex items-center px-2 py-3">
                                    <span className="mr-3">Contact</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="flex items-center gap-4">
                        <a href="/register" className="button px-8 h-12 flex items-center rounded bg-white text-black">Register</a>
                        <a href="/login" className="button px-8 h-12 flex items-center rounded border text-white border-white transition-all hover:bg-white hover:text-black">Sign In</a>
                      </div>
                    </div>
                  </div>
              </div>
          </header>
        </div>
    );
};

export default Header;
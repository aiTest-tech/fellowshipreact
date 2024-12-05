import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slice/langSlice';
import { RootState } from '../../store/store'


const Navbar = () => {
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);
    console.log("brijesh language ====", language);
    const [isMenuVisible, setMenuVisible] = useState(false); // Controls mobile menu visibility
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Controls dropdown visibility
    const [islangtoggle, setislangtoggle] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    const handleLanguageChange = (lang: string) => {
        dispatch(setLanguage(lang));
    };

    const toggleDropdown = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    const activeTabStyle = {
        color: "orange",
        fontWeight: "bold",
        textDecoration: "underline",
        textDecorationColor: "orange",
        textDecorationThickness: "3px",
        textUnderlineOffset: "6px",
    };

    const inactiveTabStyle = {
        color: "black",
    };

    return (
        <header>
            <div className="tg-header__top tg-header__top-two">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <ul className="tg-header__top-info tg-header__top-info-two left-side list-wrap">
                                <li>Screen Reader Access</li>
                                <li> Skip To Main Content</li>
                            </ul>
                        </div>
                        <div className="col-xl-4">
                            <ul className="tg-header__top-info tg-header__top-info-two left-side list-wrap">
                                <li>
                                    <NavLink to="/">
                                        <i className="fa fa-home" />
                                    </NavLink>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-envelope" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-phone" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-code-branch" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2 relative">
                            <select value={language} onChange={(e) => handleLanguageChange(e.target.value)} className="bg-white text-center px-2 ">
                                <option value="English">English</option>
                                <option value="Gujarati">Gujarati</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Header */}
            <div id="sticky-header" className="tg-header__area tg-header__area-two" style={{ "backgroundColor": 'rgba(255, 255, 255, 1.0)' }}>
                <div className="container-fluid px-lg-5">
                    <div className="row gx-0">
                        <div className="col-12">
                            <div className="tgmenu__wrap">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.jpeg" alt="Logo" />
                                    </a>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                    {
                                        language === 'English' ? (
                                            <>
                                                <ul className="navigation">
                                                    <li>
                                                        <NavLink to="/" exact style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            <i className="fa fa-home" />
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/about" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            About Us
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/meet-our-fellows" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            Meet Our Fellows
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/academic-partner" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            Academic Partner
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/media" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            Media
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/joinUs" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            Join Us
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/faqs" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            FAQ's
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/contactUs" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                            Contact
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </>
                                        ) : <>
                                            <ul className="navigation">
                                                <li>
                                                    <NavLink to="/" exact style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        <i className="fa fa-home" />
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/about" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        અમારા વિશે
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/meet-our-fellows" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        અમારા ફેલોને મળો
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/academic-partner" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        શૈક્ષણિક ભાગીદાર
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/media" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        મીડિયા
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/joinUs" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        અમારી સાથે જોડાઓ
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/faqs" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        FAQ's
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/contactUs" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        સંપર્ક કરો
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </>
                                    }

                                </div>
                                <div className="mobile-nav-toggler" onClick={toggleMenu}>
                                    <i className="tg-flaticon-menu-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

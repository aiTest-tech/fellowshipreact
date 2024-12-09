// @ts-nocheck
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slice/langSlice';
import { RootState } from '../../store/store'


const Navbar = () => {
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);
    const [isMenuVisible, setMenuVisible] = useState(false); // Controls mobile menu visibility
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Controls dropdown visibility
    const [islangtoggle, setislangtoggle] = useState(false);


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
                                <div className="mobile-nav-toggler" onClick={() => {
                                    setMenuVisible(!isMenuVisible);
                                    alert(isMenuVisible);
                                }}>
                                    <i className="tg-flaticon-menu-1" />
                                </div>
                            </div>
                            {/* Mobile Menu  */}
                            {
                                isMenuVisible && (
                                    <>
                                        <div className="tgmobile__menu">
                                            <nav className="tgmobile__menu-box">
                                                <div className="close-btn">
                                                    <i className="tg-flaticon-close" />
                                                </div>
                                                <div className="nav-logo">
                                                    <a href="index.html">
                                                        <img
                                                            src="assets/img/Gujarat-state-portal-logo.png"
                                                            alt="Logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="tgmobile__search">
                                                    <form action="#">
                                                        <input type="text" placeholder="Search here..." />
                                                        <button>
                                                            <i className="fas fa-search" />
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="tgmobile__menu-outer">
                                                    <ul className="navigation">
                                                        <li className="active">
                                                            <a href="#">
                                                                <i className="fa fa-home" />
                                                            </a>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">All About Gujarat</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">Gujarat at a Glance</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">All Chief Ministers of Gujarat</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Gujarat Fact File</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Why Gujarat</a>
                                                                </li>
                                                                <li className="menu-item-has-children">
                                                                    <a href="#">Gujarat Tourism</a>
                                                                    <ul className="sub-menu">
                                                                        <li>
                                                                            <a href="#">Major Cities And Places</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Religious Places</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Forts and Palaces</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Museums</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Libraries</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Historical Places</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Hill Stations &amp; Tourist Spots</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Heritage Hotels</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="dropdown-btn">
                                                                        <span className="plus-line" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Wildlife</a>
                                                                </li>
                                                                <li className="menu-item-has-children">
                                                                    <a href="#">Art Culture &amp; Lifestyle</a>
                                                                    <ul className="sub-menu">
                                                                        <li>
                                                                            <a href="#">Arts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Culture &amp; Lifestyle</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Music &amp; Dance</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Handicrafts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Literature</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Festivals</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Fairs</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="dropdown-btn">
                                                                        <span className="plus-line" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Sports and Recreation</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Land of the Legends</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Getting to Gujarat</a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="plus-line" />
                                                            </div>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">State Profile</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">Demography</a>
                                                                </li>
                                                                <li className="menu-item-has-children">
                                                                    <a href="#">State Government Awards</a>
                                                                    <ul className="sub-menu">
                                                                        <li>
                                                                            <a href="#">Awards During 2018</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Awards During 2017</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Awards During 2016</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Awards During 2015</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Awards During 2014</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="dropdown-btn">
                                                                        <span className="plus-line" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Gujarat Govt. Departments</a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="plus-line" />
                                                            </div>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Major Initiatives</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">E-governance</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Education</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Agriculture</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Women and Child Development</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Global Warming</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Infrastructure</a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="plus-line" />
                                                            </div>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Business</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">Gujarat : The Investment Destination</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Infrastructure</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Special Economic Zones</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Investment Regions</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Policies</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Vibrant Gujarat Summit</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Industrial Parks</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Investment Opportunities</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Major Industries</a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="plus-line" />
                                                            </div>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">E-Citizen</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">Right to Information Act</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Act And Rules</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Budget</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Press Release</a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="plus-line" />
                                                            </div>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Media</a>
                                                            <ul className="sub-menu">
                                                                <li>
                                                                    <a href="#">News</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Photo Gallery</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Video Gallery</a>
                                                                </li>
                                                            </ul>
                                                            <div className="dropdown-btn">
                                                                <span className="plus-line" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="social-links">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-linkedin-in" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-youtube" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="tgmobile__menu-backdrop" />
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
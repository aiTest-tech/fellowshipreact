// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuVisible, setMenuVisible] = useState(false);

//     // State to handle dropdown open/close
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     // Toggle mobile menu visibility
//     const toggleMenu = () => {
//         setMenuVisible(!isMenuVisible);
//     };

//     // Toggle dropdown visibility
//     const toggleDropdown = () => {
//         setDropdownOpen(!isDropdownOpen);
//     };
//     return (
//         <>
//             <header>
//                 <div id="header-fixed-height" />
//                 <div className="tg-header__top tg-header__top-two">
//                     <div className="container-fluid p-0">
//                         <div className="row align-items-center">
//                             <div className="col-xl-6">
//                                 <ul className="tg-header__top-info tg-header__top-info-two left-side list-wrap">
//                                     <li>Screen Reader Access</li>
//                                     <li> Skip To Main Content</li>
//                                 </ul>
//                             </div>
//                             <div className="col-xl-4">
//                                 <ul className="tg-header__top-info tg-header__top-info-two left-side list-wrap">
//                                     <li>
//                                         <NavLink to={'/'}>
//                                             <i className="fa fa-home" />
//                                         </NavLink>
//                                     </li>
//                                     <li>
//                                         <a href="#">
//                                             <i className="fa fa-envelope" />
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="">
//                                             <i className="fa fa-phone" />
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#">
//                                             <i className="fas fa-code-branch" />
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="col-xl-2">
//                                 <div className="dropdown">
//                                     <button
//                                         type="button"
//                                         className="btn dropdown-toggle p-2 language"
//                                         data-bs-toggle="dropdown"
//                                     >
//                                         English
//                                     </button>
//                                     <ul className="dropdown-menu">
//                                         <li>
//                                             <a className="dropdown-item" href="#">
//                                                 English
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="dropdown-item" href="#">
//                                                 Gujarati
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div id="sticky-header" className="tg-header__area tg-header__area-two" style={{ "backgroundColor": 'rgba(255, 255, 255, 1.0)' }}>
//                     <div className="container-fluid px-lg-5">
//                         <div className="row gx-0">
//                             <div className="col-12">
//                                 <div className="tgmenu__wrap">
//                                     <div className="logo">
//                                         <NavLink to="/">
//                                             <img src="assets/img/logo.jpeg" alt="Logo" />
//                                         </NavLink>
//                                     </div>
//                                     <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
//                                         <ul className="navigation">
//                                             <li className="active">
//                                                 <NavLink to={'/'}>
//                                                     <i className="fa fa-home" />
//                                                 </NavLink>
//                                             </li>
//                                             <li className="">
//                                                 <NavLink to="/about">About</NavLink>
//                                             </li>
//                                             <li className="">
//                                                 <NavLink to="/meet-our-fellows">Meet Our Fellows</NavLink>
//                                             </li>
//                                             <li className="">
//                                                 <NavLink to="/academic-partner">Academic Partner</NavLink>
//                                             </li>
//                                             <li className="">
//                                                 <NavLink to={'/media'}>Media</NavLink>
//                                             </li>
//                                             <li className="">
//                                                 <NavLink to="/joinUs">Join Us</NavLink>
//                                             </li>
//                                             <li className="">
//                                                 <NavLink to={'/faqs'}>FAQ's</NavLink>
//                                             </li>
//                                             <li className="">
//                                                 <NavLink to="/contactUs">Contact</NavLink>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="mobile-nav-toggler">
//                                         <i className="tg-flaticon-menu-1" />
//                                     </div>
//                                 </div>
//                                 {/* Mobile Menu  */}
//                                 <div className={`tgmobile__menu ${isMenuVisible ? 'mobile-menu-visible' : ''}`}>
//                                     <nav className="tgmobile__menu-box">
//                                         <div className="close-btn" onClick={toggleMenu}>
//                                             <i className="tg-flaticon-close" />
//                                         </div>
//                                         <div className="nav-logo">
//                                             <a href="index.html">
//                                                 <img
//                                                     src="assets/img/Gujarat-state-portal-logo.png"
//                                                     alt="Logo"
//                                                 />
//                                             </a>
//                                         </div>
//                                         <div className="tgmobile__search">
//                                             <form action="#">
//                                                 <input type="text" placeholder="Search here..." />
//                                                 <button>
//                                                     <i className="fas fa-search" />
//                                                 </button>
//                                             </form>
//                                         </div>
//                                         <div className="tgmobile__menu-outer">
//                                             <ul className="navigation">
//                                                 {/* Example of a menu item with dropdown */}
//                                                 <li className="menu-item-has-children">
//                                                     <a href="#">Menu Item 1</a>
//                                                     <div className="dropdown-btn" onClick={toggleDropdown}>
//                                                         <span className="plus-line"></span>
//                                                     </div>
//                                                     <ul className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
//                                                         <li><a href="#">Sub Menu 1</a></li>
//                                                         <li><a href="#">Sub Menu 2</a></li>
//                                                     </ul>
//                                                 </li>
//                                                 {/* Add more menu items here */}
//                                             </ul>
//                                         </div>
//                                         <div className="social-links">
//                                             <ul className="list-wrap">
//                                                 <li>
//                                                     <a href="#">
//                                                         <i className="fab fa-facebook-f" />
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#">
//                                                         <i className="fab fa-twitter" />
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#">
//                                                         <i className="fab fa-instagram" />
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#">
//                                                         <i className="fab fa-linkedin-in" />
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#">
//                                                         <i className="fab fa-youtube" />
//                                                     </a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </nav>
//                                 </div>

//                                 <div
//                                     className={`tgmobile__menu-backdrop ${isMenuVisible ? 'visible' : ''}`}
//                                     onClick={toggleMenu}
//                                 />
//                                 {/* End Mobile Menu */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* header-search */}
//                 <div className="search__popup search__popup-two">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="search__wrapper">
//                                     <div className="search__close">
//                                         <button
//                                             type="button"
//                                             className="search-close-btn search-close-btn-two"
//                                         >
//                                             <svg
//                                                 width={18}
//                                                 height={18}
//                                                 viewBox="0 0 18 18"
//                                                 fill="none"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path
//                                                     d="M17 1L1 17"
//                                                     stroke="currentColor"
//                                                     strokeWidth="1.5"
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                 />
//                                                 <path
//                                                     d="M1 1L17 17"
//                                                     stroke="currentColor"
//                                                     strokeWidth="1.5"
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                 />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                     <div className="search__form">
//                                         <form action="#">
//                                             <div className="search__input search__input-two">
//                                                 <input
//                                                     className="search-input-field"
//                                                     type="text"
//                                                     placeholder="Type keywords here"
//                                                 />
//                                                 <span className="search-focus-border search-focus-border-two" />
//                                                 <button>
//                                                     <svg
//                                                         width={20}
//                                                         height={20}
//                                                         viewBox="0 0 20 20"
//                                                         fill="none"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path
//                                                             d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
//                                                             stroke="currentColor"
//                                                             strokeWidth="1.5"
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                         />
//                                                         <path
//                                                             d="M19.0002 19.0002L17.2002 17.2002"
//                                                             stroke="currentcolor"
//                                                             strokeWidth="1.5"
//                                                             strokeLinecap="round"
//                                                             strokeLinejoin="round"
//                                                         ></path>
//                                                     </svg>
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="search-popup-overlay" />
//                 {/* header-search-end */}
//                 {/* offCanvas-menu */}
//                 <div className="offCanvas__info">
//                     <div className="offCanvas__close-icon offCanvas__close-icon-two menu-close">
//                         <button>
//                             <i className="far fa-window-close" />
//                         </button>
//                     </div>
//                     <div className="offCanvas__logo mb-30">
//                         <a href="index.html">
//                             <img src="assets/img/Gujarat-state-portal-logo.png" alt="Logo" />
//                         </a>
//                     </div>
//                     <div className="offCanvas__social-icon offCanvas__social-icon-two mt-30">
//                         <a href="javascript:void(0)">
//                             <i className="fab fa-facebook-f" />
//                         </a>
//                         <a href="javascript:void(0)">
//                             <i className="fab fa-twitter" />
//                         </a>
//                         <a href="javascript:void(0)">
//                             <i className="fab fa-google-plus-g" />
//                         </a>
//                         <a href="javascript:void(0)">
//                             <i className="fab fa-instagram" />
//                         </a>
//                     </div>
//                 </div>
//                 <div className="offCanvas__overly" />
//                 {/* offCanvas-menu-end */}
//             </header>

//         </>
//     )
// }

// export default Navbar




import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false); // Controls mobile menu visibility
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Controls dropdown visibility

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    // Toggle the dropdown visibility when a menu item with children is clicked
    const toggleDropdown = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    // Inline styles for active tabs
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
                        <div className="col-xl-2">
                            <div className="dropdown">
                                <button
                                    type="button"
                                    className="btn dropdown-toggle p-2 language"
                                    data-bs-toggle="dropdown"
                                >
                                    English
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Gujarati
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                                </div>

                                {/* Mobile Menu Toggle Button */}
                                <div className="mobile-nav-toggler" onClick={toggleMenu}>
                                    <i className="tg-flaticon-menu-1" />
                                </div>

                                {/* Mobile Menu */}
                                <div className={`tgmobile__menu ${isMenuVisible ? "mobile-menu-visible" : ""}`}>
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={toggleMenu}>
                                            <i className="tg-flaticon-close" />
                                        </div>

                                        {/* Mobile Menu Items */}
                                        <div className="tgmobile__menu-outer">
                                            <ul className="navigation">
                                                <li>
                                                    <NavLink to="/" exact style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        Home
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
                                                <li className="menu-item-has-children">
                                                    <a
                                                        href="#"
                                                        onClick={() => toggleDropdown(1)}
                                                        style={inactiveTabStyle}
                                                    >
                                                        More
                                                    </a>
                                                    <div className="dropdown-btn" onClick={() => toggleDropdown(1)}>
                                                        <span className="plus-line"></span>
                                                    </div>
                                                    <ul className={`dropdown ${openDropdownIndex === 1 ? "open" : ""}`}>
                                                        <li>
                                                            <NavLink to="/academic-partner" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                                Academic Partner
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
                                                    </ul>
                                                </li>
                                                <li>
                                                    <NavLink to="/contactUs" style={({ isActive }) => (isActive ? activeTabStyle : inactiveTabStyle)}>
                                                        Contact
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
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
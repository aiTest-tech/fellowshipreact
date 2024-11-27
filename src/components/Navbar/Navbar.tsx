import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    // State to handle dropdown open/close
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <header>
                <div id="header-fixed-height" />
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
                                        <NavLink to={'/'}>
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

                <div id="sticky-header" className="tg-header__area tg-header__area-two">
                    <div className="container-fluid px-lg-5">
                        <div className="row gx-0">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <div className="logo">
                                        {/* <a href="index.html"><img src="assets/img/Gujarat-state-portal-logo.png" alt="Logo"></a> */}
                                        <a href="index.html">
                                            <img src="assets/img/logo.jpeg" alt="Logo" />
                                        </a>
                                    </div>
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                        <ul className="navigation">
                                            <li className="active">
                                                <NavLink to={'/'}>
                                                    <i className="fa fa-home" />
                                                </NavLink>
                                            </li>
                                            <li className="">
                                                <a href="about.html">About</a>
                                                {/* <ul class="sub-menu">
                           <li><a href="#">Gujarat at a Glance</a></li>
                           <li><a href="#">All Chief Ministers of Gujarat</a></li>
                           <li><a href="#">Gujarat Fact File</a></li>
                           <li><a href="#">Why Gujarat</a></li>
                           <li class="menu-item-has-children">
                              <a href="#">Gujarat Tourism</a>
                              <ul class="sub-menu">
                                 <li><a href="#">Major Cities And Places</a></li>
                                 <li><a href="#">Religious Places</a></li>
                                 <li><a href="#">Forts and Palaces</a></li>
                                 <li><a href="#">Museums</a></li>
                                 <li><a href="#">Libraries</a></li>
                                 <li><a href="#">Historical Places</a></li>
                                 <li><a href="#">Hill Stations & Tourist Spots</a></li>
                                 <li><a href="#">Heritage Hotels</a></li>
                              </ul>
                           </li>
                           <li><a href="#">Wildlife</a></li>
                           <li class="menu-item-has-children">
                              <a href="#">Art Culture & Lifestyle</a>
                              <ul class="sub-menu">
                                 <li><a href="#">Arts</a></li>
                                 <li><a href="#">Culture & Lifestyle</a></li>
                                 <li><a href="#">Music & Dance</a></li>
                                 <li><a href="#">Handicrafts</a></li>
                                 <li><a href="#">Literature</a></li>
                                 <li><a href="#">Festivals</a></li>
                                 <li><a href="#">Fairs</a></li>
                              </ul>
                           </li>
                           <li><a href="#">Sports and Recreation</a></li>
                           <li><a href="#">Land of the Legends</a></li>
                           <li><a href="#">Getting to Gujarat</a></li>
                        </ul> */}
                                            </li>
                                            <li className="">
                                                <NavLink to="meet-our-fellows">Meet Our Fellows</NavLink>
                                                {/* <ul class="sub-menu">
                           <li><a href="#">Demography</a></li>
                           <li class="menu-item-has-children">
                              <a href="#">State Government Awards</a>
                              <ul class="sub-menu">
                                 <li><a href="#">Awards During 2018</a></li>
                                 <li><a href="#">Awards During 2017</a></li>
                                 <li><a href="#">Awards During 2016</a></li>
                                 <li><a href="#">Awards During 2015</a></li>
                                 <li><a href="#">Awards During 2014</a></li>
                              </ul>
                           </li>
                           <li><a href="#">Gujarat Govt. Departments</a></li>
                        </ul> */}
                                            </li>
                                            <li className="">
                                                <NavLink to="/academic-partner">Academic Partner</NavLink>
                                                {/* <ul class="sub-menu">
                           <li><a href="#">E-governance</a></li>
                           <li><a href="#">Education</a></li>
                           <li><a href="#">Agriculture</a></li>
                           <li><a href="#">Women and Child Development</a></li>
                           <li><a href="#">Global Warming</a></li>
                           <li><a href="#">Infrastructure</a></li>
                        </ul> */}
                                            </li>
                                            <li className="">
                                                <NavLink to={'/media'}>Media</NavLink>
                                                {/* <ul class="sub-menu">
                           <li><a href="#">Gujarat : The Investment Destination</a></li>
                           <li><a href="#">Infrastructure</a></li>
                           <li><a href="#">Special Economic Zones</a></li>
                           <li><a href="#">Investment Regions</a></li>
                           <li><a href="#">Policies</a></li>
                           <li><a href="#">Vibrant Gujarat Summit</a></li>
                           <li><a href="#">Industrial Parks</a></li>
                           <li><a href="#">Investment Opportunities</a></li>
                           <li><a href="#">Major Industries</a></li>
                        </ul> */}
                                            </li>
                                            <li className="">
                                                <NavLink to="/joinUs">Join Us</NavLink>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">Why Join</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eligibility Criteria</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Selection Process </a>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            {/* <li>
                                                <a href="">key heighlight point</a>
                                            </li> */}
                                            <li className="">
                                                <NavLink to={'/faqs'}>FAQ's</NavLink>
                                                {/* <ul class="sub-menu">
                           <li><a href="#">News</a></li>
                           <li><a href="#">Photo Gallery</a></li>
                           <li><a href="#">Video Gallery</a></li>
                        </ul> */}
                                            </li>
                                            <li className="">
                                                <NavLink to="/contactUs">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div class="tgmenu__action tgmenu__action-two d-none d-md-flex">
                     <ul class="list-wrap">
                     
                         <li>
                             <div class="offcanvas-toggle offcanvas-toggle-two">
                                 <a href="javascript:void(0)" class="menu-tigger">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         viewBox="0 0 30 30" fill="none">
                                         <path
                                             d="M1.66669 15H28.3334M1.66669 6.66666H28.3334M1.66669 23.3333H28.3334"
                                             stroke="currentcolor" stroke-width="1.83333"
                                             stroke-linecap="round" stroke-linejoin="round" />
                                     </svg>
                                 </a>
                             </div>
                         </li>
                     </ul>
                     </div> */}
                                    <div className="mobile-nav-toggler">
                                        <i className="tg-flaticon-menu-1" />
                                    </div>
                                </div>
                                {/* Mobile Menu  */}
                                <div className={`tgmobile__menu ${isMenuVisible ? 'mobile-menu-visible' : ''}`}>
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={toggleMenu}>
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
                                                {/* Example of a menu item with dropdown */}
                                                <li className="menu-item-has-children">
                                                    <a href="#">Menu Item 1</a>
                                                    <div className="dropdown-btn" onClick={toggleDropdown}>
                                                        <span className="plus-line"></span>
                                                    </div>
                                                    <ul className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                                        <li><a href="#">Sub Menu 1</a></li>
                                                        <li><a href="#">Sub Menu 2</a></li>
                                                    </ul>
                                                </li>
                                                {/* Add more menu items here */}
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

                                <div
                                    className={`tgmobile__menu-backdrop ${isMenuVisible ? 'visible' : ''}`}
                                    onClick={toggleMenu}
                                />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-search */}
                <div className="search__popup search__popup-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="search__wrapper">
                                    <div className="search__close">
                                        <button
                                            type="button"
                                            className="search-close-btn search-close-btn-two"
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17 1L1 17"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M1 1L17 17"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="search__form">
                                        <form action="#">
                                            <div className="search__input search__input-two">
                                                <input
                                                    className="search-input-field"
                                                    type="text"
                                                    placeholder="Type keywords here"
                                                />
                                                <span className="search-focus-border search-focus-border-two" />
                                                <button>
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M19.0002 19.0002L17.2002 17.2002"
                                                            stroke="currentcolor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-popup-overlay" />
                {/* header-search-end */}
                {/* offCanvas-menu */}
                <div className="offCanvas__info">
                    <div className="offCanvas__close-icon offCanvas__close-icon-two menu-close">
                        <button>
                            <i className="far fa-window-close" />
                        </button>
                    </div>
                    <div className="offCanvas__logo mb-30">
                        <a href="index.html">
                            <img src="assets/img/Gujarat-state-portal-logo.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="offCanvas__social-icon offCanvas__social-icon-two mt-30">
                        <a href="javascript:void(0)">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="javascript:void(0)">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="javascript:void(0)">
                            <i className="fab fa-google-plus-g" />
                        </a>
                        <a href="javascript:void(0)">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
                <div className="offCanvas__overly" />
                {/* offCanvas-menu-end */}
            </header>

        </>
    )
}

export default Navbar
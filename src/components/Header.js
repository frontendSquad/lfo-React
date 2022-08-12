function Header() {
  return (
<header className="header position-absolute w-100">
    <nav className="navbar navbar-expand">
        <div className="container">
            <a className="navbar-brand text-start" href="index.php">
             <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
            </a>
            <div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <nav id="navigation1" className="navigation mx-lg-auto">
                        {/* <!-- Logo Area Start --> */}
                        <div className="nav-header">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="nav-toggle"></div>
                        </div>
                        {/* <!-- Main Menus Wrapper --> */}
                        <div className="nav-menus-wrapper">
                            <ul className="nav-menu align-to-left">

                                <li>
                                    <a className="nav-link" aria-current="page" href="index.php">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="tutor-listing.php">Tutors</a>
                                </li>
                                <li><a className="nav-link " href="#">Services</a>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <h5>SEVICES WE OFFER</h5>
                                        </li>
                                        <li><a className="nav-link" href="">Tutoring Services</a></li>
                                        <li><a className="nav-link" href="">University Application Service</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                    <ul className="nav-dropdown">
                                        <li><h5>ABOUT THE PLATFORM</h5></li>
                                        <li><a href="">About Us</a></li>
                                        <li><a href="">Meet the team</a></li>
                                        <li><a href="">Testimonials</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#_">Register Your Interest</a>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <h5>WANT TO GET IN TOUCH?</h5>
                                        </li>
                                        <li><a href="">Contact Us</a></li>
                                        <li><a href="">Submit Tutor Application</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <ul className="nav navbar-nav justify-content-end d-flex">
                        <li className="dropdown lang-dropdown  test nav-item">
                            <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="avatar avatar-online"> <img src="images/language-flag.png" alt="avatar" /> </span>
                                <span className="user-name">ENG</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right mt-2">
                                <a className="dropdown-item" href="profile.php">Chiness</a>
                                <a className="dropdown-item" href="referrals.php">English</a>
                            </div>
                        </li>
                    </ul>
                </div>  
        </div>
    </nav>
</header>


  );
}

export default Header;
import React, { useState, useEffect } from 'react';
import './Nav.css';
import './Login.css'
import { auth } from "./firebase"
import { useNavigate } from 'react-router-dom'
function Nav() {
    let url = new URL(window.location.href);
    console.log("url", url.pathname);
    const navigate = useNavigate();
    var result = url.pathname === "/";
    console.log("res", result);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700)
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 700;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);


    ///Using States to store login and registration Input values

    const logoutData = () => {
        auth.signOut();
        navigate('/');
    }

    const RenderMenu = () => {

        if (auth.currentUser != null) {

            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Chat">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login" type="button" data-toggle="modal" data-target={auth.currentUser ? "#logoutModule" : "#exampleModal"}><i class="fas fa-sign-in-alt"></i>Logout</a>
                    </li>

                </>
            )
        }
        else {
            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>

                </>
            )
        }
    }

    return (

        <>
            <nav className={`${isMobile ? "navbar navbar-expand-sm position-sticky navbar-light bg-light" : "navbar navbar-expand-sm position-sticky navbar-light"}`} id="nav_bar" style={result === true ? { background: "transparent" } : { background: "rgb(0, 0, 0, 0.4)" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: '#333' }}>Messengrify</a>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <RenderMenu />
                        </ul>

                    </div>
                </div>
            </nav>

            <div class="modal fade" id="logoutModule" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='login_component'>
                                <div className='login_form'>
                                    <img src="https://image.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg" alt="company logo"></img>
                                    <div className='login_form_fields'>
                                        <img src="/images/user.jpg" alt="login_image" />
                                        <h5>Logout Your Account</h5>
                                        <button value="Login" id="login_btn" onClick={logoutData} data-dismiss="modal">Logout</button>
                                    </div>
                                </div>
                            </div >
                        </div>

                    </div>
                </div>
            </div>


        </>

    );

}
export default Nav;
import React from "react";
import './styles.css';


const Footer = () => {
    return (
        <>
        <div className="footer p-4 container-fluid">
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="p-4 col-md-6 mb-5 col-lg-4">
                    <a href="" className="navbar-brand">
                        <h2 className="text-start text-light font-weight-bold">
                            <b>ABIF <span className="text-success">Global</span></b>
                        </h2>
                    </a>
                    <p className="text-white-50 text-start">
                    In this updated code, I've added a check to make sure feed.multimedia exists
                    . I've also added an alt attribute to the img tag to provide a text
                    </p>
                    <h5 className="text-start text-white mt-4">
                        Follow Us
                    </h5>
                    <a href="" className="btn btn-outline-success m-1 fa fa-twitter"></a>
                    <a href="" className="btn btn-outline-success m-2 fa fa-facebook"></a>
                    <a href="" className="btn btn-outline-success m-2 fa fa-linkedin"></a>
                    <a href="" className="btn btn-outline-success m-2 fa fa-instagram"></a>
                </div>

                <div className="p-4 col-md-6 mb-5 col-lg-2">
                    <h5 className="text-start text">
                        OUR SERVICES
                    </h5>
                    <div class="d-flex mt-3 flex-column justify-content-start">
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> About</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Destination</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Services</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Packages</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Guides</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Testimonial</a>
                        <a class="text-white-50 text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i> Blog</a>
                    </div>
                </div>

                <div className="p-4 col-md-6 mb-5 col-lg-2">
                    <h5 className="text-start text">
                        USEFUL LINKS
                    </h5>
                    <div class="d-flex mt-3 flex-column justify-content-start">
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> About</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Destination</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Services</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Packages</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Guides</a>
                        <a class="text-white-50 text-decoration-none mb-2" href="#"><i class="fa fa-angle-right mr-2"></i> Testimonial</a>
                        <a class="text-white-50 text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i> Blog</a>
                    </div>
                </div>


                <div class="col-lg-4 p-4 col-md-6 mb-5">
                    <h5 class="text-white text-uppercase mb-4">Contact Us</h5>
                    <p className="text-white-50"><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                    <p className="text-white-50"><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                    <p className="text-white-50"><i class="fa fa-envelope mr-2"></i> info@example.com</p>
                    <p className="text-white-50"><i class="fa fa-envelope mr-2"></i> info@example.com</p>
                    <br></br>
                    <h6 class="text-white text-uppercase mt-4 mb-3">Newsletter</h6>
                    <div class="w-100">
                        <div class="input-group">
                            <input type="text" class="form-control p-4 border-light" placeholder="Your Email" />
                            <div class="input-group-append">
                                <button class="btn btn-success p-4 px-3">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid text-white border-top border-dark p-4">
                <div class="row">
                    <div class="col-lg-6 text-start text-md-right">
                        <p class="text-white-50">Designed by <a className="text-white-50 text-decoration-none" href="">Divine Mercyx studios</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
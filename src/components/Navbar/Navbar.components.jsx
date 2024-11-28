import React from "react";


const Navbar = () => {
    return (
        <>
        <div className="p-4 nav  container-fluid">
            <div className="container shadow-lg fixed-top bg-light">
            <nav class="navbar navbar-expand-sm bg-light p-4 navbar-light">
                <div class="container-fluid">
                    <a className="text-dark navbar-brand font-weight-bolder"><b>ABIF-Global</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active text-success" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Offers</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Stories</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">social</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar
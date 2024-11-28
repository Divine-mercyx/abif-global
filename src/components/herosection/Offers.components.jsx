import React from "react";
import img from './place2.jpg';


const Offers = () => {
    return (
        <>
        <br></br>
        <br></br>
        <div class="input-group container">
                            <input type="text" class="form-control shadow-sm p-4 border-light" placeholder="Search" />
                            <div class="input-group-append">
                                <button class="btn btn-success button p-4 px-3">Search</button>
                            </div>
        </div>
    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-success text-uppercase">OFFERS</h6>
                <h1>Our Travel Offers</h1>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" src={img} alt="" />
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">Offer</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" src={img} alt="" />
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">Offer</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" src={img} alt="" />
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">Offer</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" src={img} alt="" />
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">Offer</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Offers
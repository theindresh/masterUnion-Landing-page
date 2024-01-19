import news18 from '../../components/Assests/NewsImg/news18.png';
// import { useEffect, useState } from "react";
import '../../components/News Section/NewsTab.css'

import arrowUp from '../../components/Assests/NewsImg/arrowUp.svg';
// import news18 from '../Assests/NewsImg/news18.png'
function NewsTab() {
    // const [newsImage, setNewsImage] = useState([{}])
    const mastersData = [
        { image: news18 },
        { image: news18 },
        { image: news18 },
        { image: news18 },
    ];

    return <>
        <div className='main-box'>
            <section id="master" className='mt-5 d-flex justify-content-between'>
                <div className="about-section mt-0 wrapper">
                    <span className="exp-engage" style={{ color: 'white' }}>In the News</span><br />
                    <span className="close-look" > Meet Your Masters</span><br />
                </div>
                <div className='me-5 p-4'>
                    <div className='arrow-direction'>
                        <i className="fa-solid fa-arrow-left text-light"></i>
                    </div>
                    <div className='arrow-direction'>
                        <i className="fa-solid fa-arrow-right text-light"></i>
                    </div>
                </div>
            </section>
            {/* Card Sections With Dyamic Mapping */}
            <div className='container mt-5'>
                <div className='d-flex justify-content-center overflow-hidden gap-3'>
                    {mastersData.map((master, index) => (
                        <div key={index} className='col-md-2 mb-4 col-lg-6 col-sm-6'>
                            <div className='card' style={{ border: 'none' }}>
                                <img src={master.image} className='card-img-top' alt='...' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='join-community container rounded-5 d-flex justify-content-evenly gap-5'>
                <div className='mt-5 ps-4 col-8 '>
                    <span className='join-com'>GET A PEAK INTO THE
                        <br /> MASTERCAMP LIFE</span>
                </div>
                <div className='mt-5 pt-4 col-4'>
                    <button className='btn btn-light '> Join Our Community<img src={arrowUp} alt='' /></button>
                </div>
            </div>
        </div>
        {/* Program Applications */}
        <section id="master" className='mt-5 d-flex justify-content-between'>
            <div className="about-section mt-0 wrapper">
                <span className="exp-engage" style={{ color: 'white' }}>Experience MasterCamps</span>
            </div>
        </section>






        <div className='container-fluid mt-5 d-flex justify-content-evenly gap-4 m-3 p-2'>


            <div class="card mb-3 me-2" style={{maxWidth: "500px"}}>
                <div class="row g-0">
                    <h3 class="card-title text-center">B.tech</h3>
                    <div class="col-md-4">
                        <img src={news18} alt="" class="img-thumbnail img-res zoom-effect"
                            width="150" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-subtitle"><span class="education-title">College name:-</span> Noida Institute of
                                Engineering And technology</p>
                            <p class="card-subtitle"><span class="education-title">Year Of Passing:-</span> 2023</p>
                            <p class="card-subtitle"><span class="education-title">Course:-</span> Computer Science & Engineering
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 me-2" style={{maxWidth: "500px"}}>
                <div class="row g-0">
                    <h3 class="card-title text-center">B.tech</h3>
                    <div class="col-md-4">
                        <img src={news18} alt="" class="img-thumbnail img-res zoom-effect"
                            width="150" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-subtitle"><span class="education-title">College name:-</span> Noida Institute of
                                Engineering And technology</p>
                            <p class="card-subtitle"><span class="education-title">Year Of Passing:-</span> 2023</p>
                            <p class="card-subtitle"><span class="education-title">Course:-</span> Computer Science & Engineering
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 me-2" style={{maxWidth: "500px"}}>
                <div class="row g-0">
                    <h3 class="card-title text-center">B.tech</h3>
                    <div class="col-md-4">
                        <img src={news18} alt="" class="img-thumbnail img-res zoom-effect"
                            width="150" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-subtitle"><span class="education-title">College name:-</span> Noida Institute of
                                Engineering And technology</p>
                            <p class="card-subtitle"><span class="education-title">Year Of Passing:-</span> 2023</p>
                            <p class="card-subtitle"><span class="education-title">Course:-</span> Computer Science & Engineering
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default NewsTab;
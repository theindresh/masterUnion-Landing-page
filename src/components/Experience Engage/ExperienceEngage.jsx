import experinceImg from '../../components/Assests/experienceImg.png'
import '../../components/Experience Engage/Experience.css'
function ExperienceEngage() {


    return <>
        <section id="about">
            <div className="about-section mt-0 wrapper">
                <h1 className="exp-engage">Experience.<br /> Engage.Elevet</h1>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 text-sec">
                            <h2>In-Person Residenies</h2>
                            <p>
                                I hail from district Maharajganj UP now I put up in sector 62 noida
                                I am done my BTech in computer Science and engineering from NIET .
                            </p>
                            <h4 className="text-reset">For More deatils Contact me..</h4>
                            <div className=" footer-social pt-4 text-center fs-4 p-3">
                                <a href="https://www.facebook.com/theindresh" className="me-4">
                                    <i className="fab fa-facebook-f zoom-effect" />
                                </a>
                                <a
                                    href="https://www.instagram.com/theindresh/"
                                    className="me-4 text-reset "
                                >
                                    <i className="fab fa-instagram zoom-effect" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/indresh-bharati-24775a202"
                                    className="me-4 "
                                >
                                    <i className="fab fa-linkedin zoom-effect" />
                                </a>
                                <a href="https://github.com/theindresh" className="me-4 text-reset">
                                    <i className="fab fa-github zoom-effect" />
                                </a>
                                <a href="https://www.youtube.com/@theindreshvlogs" className="me-4">
                                    <i className="fab fa-youtube zoom-effect" />
                                </a>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/indresh-bharati-24775a202"
                                className="main-btn mt-4"
                            >
                                Learn more
                            </a>
                        </div>
                        <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                            <div className="card border-0 ">
                                <img
                                    src={experinceImg}
                                    alt=""
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}
export default ExperienceEngage;
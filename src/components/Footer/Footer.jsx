import '../../components/Footer/Footer.css';
function Footer() {
    return (
        <>
            <section id="footer">
                <footer className="text-center text-lg-start bg-black text-muted custom-footer">
                    <div className="border-bottom p-4">
                        <div className="container text-md-start mt-5 mb-5">
                            <div className="row mt-5">
                                <div className="col-md-3 col-lg-4 mx-auto mb-4 mt-5">
                                    <h1>MASTER'S UNION</h1>
                                </div>
                                <div className="col-md-4 mx-auto mb-md-0 mb-4 mt-5 address">
                                    <p><i className="fa-solid fa-location-dot"></i> <span> </span>DLF Cyberpark, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana, 122008</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center justify-content-between p-4">
                        <div className="me-5 d-none d-lg-block">
                            <ul className="d-flex justify-content-between justify-content-center ms-2">
                                <li>Privacy policy</li>
                                <li>Tearm & Condication</li>
                                <li>Cookie policy</li>
                            </ul>
                            <span className="ms-5">*T&C apply: Images shown here after differ from actual Product</span>
                        </div>
                        <div>
                            <a target='/' href="https://www.facebook.com/themastersunion/"
                                className="me-4 text-reset"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a target='' href="https://twitter.com/themastersunion?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="me-4 text-reset">
                                <i className="fab fa-twitter" />
                            </a>
                            <a target=''
                                href="https://www.instagram.com/masters.union/?hl=en"
                                className="me-4 text-reset"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <a target=''
                                href="https://www.linkedin.com/school/mastersunion/?originalSubdomain=in"
                                className="me-4 text-reset"
                            >
                                <i className="fab fa-linkedin" />
                            </a>

                            <a target=''
                                href="https://www.youtube.com/@MastersUnion"
                                className="me-4 text-reset"
                            >
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>

                </footer>
            </section>

        </>
    )
}
export default Footer;
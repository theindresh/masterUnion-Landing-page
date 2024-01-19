import hero from '../Assests/hero.png';
import '../Hero/Hero.css';
function Hero() {
    return (
        <>
            <div className='container'>
                <section id="master" className='mt-5 d-flex flex-column justify-content-between'>
                    <div className='homepage-sm'>
                        <div className="hero-section mt-0 wrapper">
                            <span className="Hero-look" style={{ color: "white" }}>Online Practitioner-Led Learning with Offline Community Experiences</span>
                        </div>

                    </div>

                </section>
                <div style={{ display: "flex", justifyContent: "center" }} className="home-img">
                    <img style={{ borderRadius: "5%", width: "90rem", justifyContent: "center" }} src={hero} alt="xyz" width={"100%"} />
                </div>
                <div className='ads col-12'>
                    <p class="text-justify "><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span>br<span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span></p>
                    <p class="text-justify"><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span><span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span>br<span className='custom-ads-words'>Impressive</span>*<span className='custom-ads-name'>Programs</span></p>
                </div>
            </div>


        </>
    )
}
export default Hero;
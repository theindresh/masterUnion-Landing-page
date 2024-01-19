import React from 'react';
import '../Masters/MeetMasters.css';
import MihirImage from '../../components/Assests/MastersImage/Mihir.png';
import EdwardImage from '../../components/Assests/MastersImage/Edward.png';
import ManojImage from '../../components/Assests/MastersImage/manoj.png';
import VipinImage from '../../components/Assests/MastersImage/vipin.png';

const mastersData = [
    { name: 'Mihir Mankad', image: MihirImage, title: 'Professor of Practice, Tufts & Harvard' },
    { name: 'Edward Rogers', image: EdwardImage, title: 'Former Chief Knowledge Officer, NASA' },
    { name: 'Manoj Kohli', image: ManojImage, title: 'Former Chairman Airtel' },
    { name: 'Vipin Sondhi', image: VipinImage, title: 'Former Managing Director Levyland' },
];

function MeetMasters() {
    return (
        <>
            <section id="master" className='mt-5 d-flex justify-content-between'>
                <div className="about-section mt-0 wrapper">
                    <span className="exp-engage" style={{ color: 'white' }}> Meet Your Masters</span><br />
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
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    {mastersData.map((master, index) => (
                        <div key={index} className='col-md-2 mb-4 col-lg-3 col-sm-6'>
                            <div className='card' style={{ border: 'none' }}>
                                <img src={master.image} className='card-img-top' alt='...' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{master.name}</h5>
                                    <hr style={{ width: '75%', color: "#8e8e8e" }} />
                                    <p className='card-text'>{master.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MeetMasters;

import React from 'react';
import './footer.css';


function Footer() {
    return (
        <div className="footer container-fluid">
            <div className="row text-start">
                <div className="col-12 col-md-4">
                    <ul>
                        <li><h6>CONTATTACI</h6></li>
                        <li>INDIRIZZO: Via Giulio Cesare 12</li>
                        <li>MAIL: pepperone@example.com</li>
                        <li>TELEFONO: 555-123456</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <ul className="links">
                        <li><h6>LINKS</h6></li>
                        <li>Home</li>
                        <li>Chi Siamo</li>
                        <li>Menu</li>
                        <li>Contatti</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <h6 className="ms-4">SEGUICI SU</h6>
                    <ul className="d-flex">
                        <li><a href="#"><i className="fa-brands fa-facebook fa-2x me-2"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram fa-2x me-2"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-x-twitter fa-2x me-2"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-youtube fa-2x me-2"></i></a></li>
                    </ul>
                </div>
                <div className="row text-center pt-5">
                    <h6>Copyright © 2024.  All Rights reserved</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer
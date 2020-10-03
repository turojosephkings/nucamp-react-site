import React from 'react';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                    <div className="row">             
                        <div className="col-4 col-sm-2 offset-1">
                            <FadeTransform
                                in
                                transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                                }}>
                                <h5>Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/directory">Directory</Link></li>
                                    <li><Link to="/aboutus">About</Link></li>
                                    <li><Link to="/contactus">Contact</Link></li>
                                </ul>
                            </FadeTransform>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                            <FadeTransform
                                in
                                transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                                }}>
                                <h5>Social</h5>                                
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                            </FadeTransform>
                        </div>
                        <div className="col-sm-4 text-center">
                            <FadeTransform
                                    in
                                    transformProps={{
                                    exitTransform: 'scale(0.5) translateY(50%)'
                                    }}>
                                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                                <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                            </FadeTransform>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
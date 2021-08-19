import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed mt-5 ">
                <div className="footer-left">
                    <h3>Company<span>logo</span></h3>
                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>
                        <a href="#">Blog</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                        <a href="#">Faq</a>
                        <a href="#">Contact</a>
                    </p>
                    <p className="footer-company-name">Company Name © 2015</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker" />
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>
                    <div>
                        <i className="fa fa-phone" />
                        <p>+1.555.555.5555</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope" />
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span >About the company</span>
                        <p className="text-light fs-6"> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p>
                    </p>
                   
                </div>
            </footer>
        </div>

    )
}

export default Footer

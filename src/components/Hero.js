import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container text-center">
                <h1 className="mw-display-1 m-b-4"></h1>
                <div className="d-flex justify-content-center m-b-2">
                    <div className="col-md-7 col-lg-6">
                    <p className="mw-body-1">
                    Get your money moving internationally. Save up to 9x when you<br />
                    send with Wise.
                    </p>
                    </div>
                </div>
                <div className="row m-b-5">
                    <div className="hero-button-container btn-stack btn-stack-column-xs btn-stack-m-1 col-xs-12 col-md-push-1 col-md-10 col-lg-push-3 col-lg-6">
                        <a className="np-link btn btn-primary" href="/gb/send-money/">Send money now</a>
                        <a className="np-link btn btn-primary btn-priority-2" href="/register/?redirectUrl=%252Fuser%252Faccount%252F#/email">Open an account</a>
                    </div>
                </div>
                <div className="p-t-3 hero-container">
                    <div className="col-sm-9 d-flex justify-content-center">
                        <video className="hero-video" autoPlay loop muted playsInline poster="/static-assets/app/_next/static/media/poster.ff25224b.jpg">
                            <source src="https://wise.com/static-assets/app/_next/static/media/3d-globe-cfe618f7f706583422789cd9773a062a.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

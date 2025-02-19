import React from 'react'
import "../css/thankYou.css";

function ThankYou() {
    return (
        <>
            <section className="siteBody">
                <div className="container-fluid">
                    <div className="thankyou-page">
                        <div className="thankyou-para">
                            <h1>Thank You !</h1>
                            <p>Your message has been sent successfully.</p>
                            <p>We will contact you very soon...</p>
                        </div>
                        <a className='theme-btn' href='/' >
                            Return to Homepage
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThankYou;

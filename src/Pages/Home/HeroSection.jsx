export default function HeroSection(){
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">
                        Hello, I am Harold F. Royo
                    </p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Looking For
                        </span>{""}
                        <br />
                        Work
                    </h1>
                    <p className="hero-section-description">
                        I study Front-end development.                     
                    </p>
                </div>
                {/* <button className="btn btn-primary">Get In Touch</button> */}
            </div>

            <div className="hero-section-img">
                <img src="./img/gradToga_pic.JPG" alt="Hero Section" />
            </div>
        </section>
    );
}
import React from "react";
import "./LandingPage.css";

const Landing_Page = () => {
    return (
        <div className="">
            <section className="hero-section">
                <div className="mx-auto col-12 ">
                    <div data-aos="fade-up" className="flex-hero px-2 pb-4 ">
                        <h1 className="">
                            <span className="landpxl">Your Health</span>
                            <br />
                            <span className="text-gradient landpxl">Our Responsibility</span>
                        </h1>
                        <div className="blob-cont">
                            <div className="blue blob"></div>
                        </div>
                        <div className="blob-cont">
                            <div className="blue1 blob"></div>
                        </div>
                        <h4>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit
                            omnis quibusdam non cum rem voluptatem!
                        </h4>
                        <a href="/booking-consultation">
                            <button className="button">Get Started</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing_Page;

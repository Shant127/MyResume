import React from "react";

function Resume() {
    return (
        <div>
            {/* ======= Mobile nav toggle button ======= */}
            {/* <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> */}
            <i className="bi bi-list mobile-nav-toggle d-lg-none" />
            {/* ======= Header ======= */}
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li><a href="#home" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
                    </ul>
                </nav>{/* .nav-menu */}
            </header>{/* End Header */}
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                    <h1>Shant Shakhnazaryan</h1>
                    <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/mafia.clique/" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="https://www.linkedin.com/in/shant-s-9263b8257/" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>
            </section>{/* End Hero */}
            <main id="main">
                {/* ======= About Section ======= */}
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About</h2>
                            <p>Born & Raised in Los Angeles, CA . Some things about me , I'm a Software Developer experience with HTML, CSS, Python, Java, JavaScript & React. I'm also into Car Photography/Videography i run a car crew out here in Los Angeles by the name of Mafia Clique i host events every year look us up on instagram " mafia.clique ".</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="assets/img/IMG-0122.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>Software Developer &amp; Photographer.</h3>
                                <p className="fst-italic">
                                    
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>mafiaclique92@gmail.com</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Los Angeles, CA</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>21</span></li>
                                            <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>{/* End About Section */}
                {/* ======= Resume Section ======= */}
                <section id="resume" className="resume">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Resume</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="resume-title">Summary</h3>
                                <div className="resume-item pb-0">
                                    <h4>Shant Shakhnazaryan</h4>
                                    <p><em>Started my coding journey summer of 2022, graduated and got my certificate from Coding Dojo Onsite Program in Burbank,CA. I got into Photography back in 2018 when i started Mafia Clique been doing it ever since.</em></p>
                                    <ul>
                                        <li>Los Angeles,CA </li>
                                        <li>mafiaclique92@gmail.com</li>
                                    </ul>
                                </div>
                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>Contract</h4>
                                    <h5>2022-Present</h5>
                                    <p><em>Vista Technologies</em></p>
                                    <p> Improved Software Developing skills, great learning expierence i was apart of the development team to make the official Vista Technologies website. I'm still apart of the team to this day working on future/upcoming projects. </p>
                                </div>
                                <div className="resume-item">
                                    <h4>Coding Degree</h4>
                                    <h5>2022-2022</h5>
                                    <p><em>Coding Dojo, Burbank, CA</em></p>
                                    <p>Software Development Onsite & Online Full-Time with competencies in Web Fundamentals, Python,JavaScript,Java within a 14 week course 560 hours clocked.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    <h4>Photography & Videography</h4>
                                    <h5>2018 - Present</h5>
                                    <p><em>Picked up a camera and started learning myself how to work a camera and edit etc by the help of youtube and the internet, never got courses on photography if i have any trouble youtube has the answer.</em></p>
                                    <ul>
                                        <li>Equipment: Canon EOS 6D 24-105mm & Sony a7iii 28-70mm</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Mafia Clique</h4>
                                    <h5>2018 - Present</h5>
                                    <p><em>Organized Mafia Clique in 2018 started with a small group of friends and posted content on social media platform Instagram which led to hundreds more joining us after viewing our content. the rest is for you to come out and see for yourself.</em></p>
                                    <ul>
                                        <li>Hosting car events every year in LA</li>
                                        <li>Cruises, Race Nights, Canyon Runs, Track days, etc. </li>
                                        <li>Interested in joining a car crew? check us out on instagram @mafia.clique and send us a message that you would like to join with a picture of your car and its modification list if there is any.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Resume Section */}
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <p>Some of my Photography</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                            </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/svj.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Ferrari SF90 & Lamborghini Aventador SVJ</h4>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/f90.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>BMW F90 M5 Competition </h4>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/x5m.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>BMW F95 X5M Competition</h4>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/m5-3.0.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>BMW F10 M5 & Dodge Charger Hellcat Widebody</h4>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/m5rear.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>F90 M5 Competition</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/e30.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Camaro ZL1 & E30 M3</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/g82.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>BMW G82 M4 Competition & G30 M550i</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/aston.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>X5M , 750i , Aston Martin Vantage</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="assets/img/gt.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Mclaren GT</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Portfolio Section */}
                {/* ======= Contact Section ======= */}
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>
                        <div className="row mt-1">
                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="email">
                                        <i className="bi bi-envelope" />
                                        <h4>Email:</h4>
                                        <p>mafiaclique92@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Resume
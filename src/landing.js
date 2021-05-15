import React from "react"
import { Link } from "react-router-dom";


function Landing() {
    return (
        <>
            <section class="hero">
                <div class="background-image"></div>
                <div class="hero-content-area">
                    <h1>Explore Now!</h1>
                    <h3>Get Your Aesthetic Pleasure With Unmissable Art Collections.</h3>
                    <Link to="/login" class="btn pinkbutton">GET YOUR ART</Link>
                </div>
            </section>
            <section class="artpieces">
                <h3 class="title">Some of my Arts</h3>
                <p>Tired of the boring walls, plain shelves, usual lives? Come along with me on one of a kind unusual adventures with your heart. Here are some pictures of my variety of art collections to mesmerize you along with your heart!</p>
                <hr />


                <div className="row">
                    <div className="col-lg-4"><img src={"./1.png"} /></div>
                    <div className="col-lg-4"><img src={"./4.png"} /></div>
                    <div className="col-lg-4"><img src={"./29.png"} /></div>
                    <div className="col-lg-4"><img src={"./11.png"} /></div>
                    <div className="col-lg-4"><img src={"./9.png"} /></div>
                    <div className="col-lg-4"><img src={"./2.png"} /></div>
                </div>
            </section>

            <section class="contact">
                <h3 class="title">Learn more</h3>
                <p>Want to know about my upcoming events, or participate in any of my workshops? Just sign up for my mailing list. No spam from me, I promise! Except for the spam I give you to keep up your energy while you're low or having a bad day. Have a blast! I have tons of that.</p>
                <hr />
                <form >
                    <input type="email" placeholder="Email" />
                    <a href="#" class="btn">Subscribe now</a>
                </form>
            </section>
            <footer>
                <p className="center">Copyrights, all are my own images &hearts;</p>
            </footer>
        </>
    )
}

export default Landing;
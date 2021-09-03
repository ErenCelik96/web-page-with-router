import React from 'react'

export default function Services() {
    return (
        <div>
            <section id="midBar">
                <div className="sec secLeft">
                    <h1>Subscribe To Our Newsletter</h1>
                </div>
                <div className="sec secRight"><input id="subscribeİnp" type="email" placeholder=" Enter Email..." /> <a id="subscribeBut" href="#">Subscribe</a>
                </div>
            </section>
            <main>
                <div className="mn mnLeft">
                    <h3>Services</h3><br />
                    <div className="item mnUp">
                        <h3>Website Design</h3><br /><p>Lorem ipsum dolor sit amet consectetur     adipisicing elit.  Maiores dolores, ducimus impedit placeat quisquam quasi?</p><br /><p>Pricing: $1,000 -  $3,000</p>
                    </div>
                    <div className="item mnCenter">
                        <h3>Website Maintenance</h3><br /><p>Lorem ipsum dolor sit amet consectetur    adipisicing elit.  Maiores dolores, ducimus impedit placeat quisquam quasi?</p><br /><p>Pricing: $250 per         month</p>
                    </div>
                    <div className="item mnBottom">
                        <h3>Website Hosting</h3><br /><p>Lorem ipsum dolor sit amet consectetur    adipisicing elit.  Maiores dolores, ducimus impedit placeat quisquam quasi?</p><br /><p>Pricing: $250 per         month</p>
                    </div>
                </div>

                <div className="mn mnRight">
                    <div id="form">
                        <h3>Get A Quote</h3><br />
                        <form action="#">
                            <label for="name">Name</label><br />
                            <input className="formText" type="text" id="name" placeholder="Name" /><br />
                            <label for="email">Email</label><br />
                            <input className="formText" type="email" id="email" placeholder="Email Address" /><br />
                            <label for="message">Message</label><br />
                            <textarea name="message" id="message" rows="3" placeholder="Message"></textarea><br />
                            <input id="submitBut" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </main>
        </div>


    )
}

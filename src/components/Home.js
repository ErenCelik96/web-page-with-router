import React from 'react'
import HtmlLogo from "../assets/logo_html.png";
import CssLogo from "../assets/logo_css.png";
import BrushLogo from "../assets/logo_brush.png";
import Css from "./Css";
import Html from "./Html";
import Design from "./Design";

export default function Home() {
    return (
        <div>
            {/* <section id="midBar">
                <div className="sec secLeft">
                    <h1>Subscribe To Our Newsletter</h1>
                </div>
                <div className="sec secRight"><input id="subscribeİnp" type="email" placeholder=" Enter Email..." /> <a id="subscribeBut" href="#">Subscribe</a>
                </div>
            </section>
            <section id="infoBar">
                <div class="inf infLeft">
                    <img src={HtmlLogo} alt="HTML" /><br /><br /><h4>HTML5 Markup</h4><br /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere repellat cupiditate ducimus placeat nostrum?</p>
                </div>
                <div class="inf infCenter">
                    <img src={CssLogo} alt="CSS" /><br /><br /><h4>CSS Styling</h4><br /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere repellat cupiditate ducimus placeat nostrum?</p>
                </div>
                <div class="inf infRight">
                    <img src={BrushLogo} alt="Brush" /><br /><br /><h4>Graphing Desing</h4><br/><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere repellat cupiditate ducimus placeat nostrum?</p>
                </div>
            </section> */}
            {/* <Css/> */}
            {/* <Html/> */}
            <Design/>
            
        </div>
    )
}

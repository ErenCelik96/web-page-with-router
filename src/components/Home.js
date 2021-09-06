import React from 'react'
import HtmlLogo from "../assets/logo_html.png";
import CssLogo from "../assets/logo_css.png";
import BrushLogo from "../assets/logo_brush.png";
import { BrowserRouter as Rounter, Link } from "react-router-dom";
import App from "../App";


export default function Home() {
    return (
        <Rounter>
        <div>
            <section id="midBar">
                <div className="sec secLeft">
                    <h1>Subscribe To Our Newsletter</h1>
                </div>
                <div className="sec secRight"><input id="subscribeİnp" type="email" placeholder=" Enter Email..." /> <a id="subscribeBut" href="#">Subscribe</a>
                </div>
            </section>
            <section id="infoBar">
                <div className="inf infLeft">
                    <Link to="/html">
                    <img src={HtmlLogo} alt="HTML" /></Link><br /><br /><h4>HTML5 Markup</h4><br /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere repellat cupiditate ducimus placeat nostrum?</p>
                </div>
                <div className="inf infCenter">
                <Link to="/css">
                    <img src={CssLogo} alt="CSS" /></Link><br /><br /><h4>CSS Styling</h4><br /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere repellat cupiditate ducimus placeat nostrum?</p>
                </div>
                <div className="inf infRight">
                <Link to="/design">
                    <img src={BrushLogo} alt="Brush" /></Link><br /><br /><h4>Graphing Desing</h4><br/><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere repellat cupiditate ducimus placeat nostrum?</p>
                </div>
            </section>        
        </div>
        </Rounter>
    )
}

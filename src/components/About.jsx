const About = (props) => {
    return (
        <div className="About">
            <div className="About-Panel">
                <div className="About__Header">
                    <img src={props.logo} alt="Tanks Logo" />
                </div>
                <div className="About__Panel">
                    <div>Jeff "Tank" Harkleroad</div>
                    <div>
                        Serving Columbus and central Ohio, we make smoked and 
                        slow-cooked meats and comfort cuisine.
                    </div>
                </div>
            </div>
            <div className="About-Panel">
                <div className="About__Header">
                    Where you can find us: 
                </div>
                <div className="About-Panel__Section">
                    <div>The Hey Hey</div>
                    <div>
                        Every Sunday, Noon - 10PM 
                    </div>
                    <div>
                        361 E Whittier St, Columbus, OH 43206
                    </div>
                </div>
                <div className="About-Panel__Section">
                    <div>Brewstirs of Beechwold</div>
                    <div>
                        Sunday through Saturday, Noon - 10PM
                    </div>
                    <div>
                    4955 Arbor Village Drive, Columbus, Ohio 43215
                    </div>
                </div>
            </div>
        </div>
    )
}
// We are serving at the Brewstirs of Beechwold at 4955 Arbor Village Drive Columbus Ohio, 43215 from Noon until 10 Sunday through Saturday.  
export default About;
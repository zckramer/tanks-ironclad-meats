const About = (props) => {
    return (
        <div className={props.className}>
            <div className={props.panelClass}>
                <div className="About__Header">
                    Jeff "Tank" Harkleroad
                </div>
                <div className="About__Panel">
                    <div>
                        Serving Columbus and central Ohio, we make smoked and 
                        slow-cooked meats and comfort cuisine.
                    </div>
                </div>
            </div>
            <div className={props.panelClass}>
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
                <hr style={{width: '70%'}} />
                <div className="About-Panel__Section">
                    <div>Brewstirs of Beechwold</div>
                    <div>
                        Every day, Noon - 10PM
                    </div>
                    <div>
                    4955 Arbor Village Drive, Columbus, Ohio 43215
                    </div>
                </div>
                <hr style={{width: '70%'}} />
                <div className="About-Panel__Section">
                    <div>Leipzig Haus</div>
                    <div>
                        Friday - Saturday, 5PM - 10PM
                    </div>
                    <div>
                        2201 East Livingston Ave, Columbus, Ohio 43209
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
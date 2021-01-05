const About = (props) => {
    return (
        <div className="About">
            <div className="About__Header">
                <img id="Tank-Logo" src={props.logo}/>
                {/* <h1 id="Tank-Title">Tank's Ironclad Meats</h1> */}
            </div>
            <div className="About__Panel">
                <div>Jeff "Tank" Harkleroad</div>
                <div>Serving Columbus and central Ohio, we make smoked and slow-cooked meats and comfort cuisine</div>
            </div>
        </div>
    )
}

export default About;
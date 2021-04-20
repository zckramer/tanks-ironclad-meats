import TankLogo from '../images/tank_logo.png';
import IntroVideo from '../images/RoughDraft01.mp4';
import meat1 from '../images/meat01.jpg';
import meat2 from '../images/meat02.jpg';
import meat3 from '../images/meat03.jpg';


const IntroBlock = () => {
    const imagesArray = [
        meat1,
        meat2,
        meat3
    ]
    return (
        <div className='IntroBlock'>
            <div className='Intro__Logo-Background'>
                {/* <img className='Intro__Background' alt='Action scenes of meats being cooked' src={imagesArray[1]} /> */}
                <video autoPlay muted 
                    className='Intro__Background' 
                    alt='Action scenes of meats being cooked'
                    src={IntroVideo} type='video/mp4'
                >
                    {/* <source src={IntroVideo} type='video/mp4' /> */}
                </video>
                <img className='Intro__Logo' src={TankLogo} alt={`Tank's Ironclad Meats Logo`} />
            </div>
        </div>
    )
}
export default IntroBlock;
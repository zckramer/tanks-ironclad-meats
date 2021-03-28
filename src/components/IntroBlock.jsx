import TankLogo from '../images/tank_logo.jpg';
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
                <img className='Intro__Background' alt='Action scenes of meats being cooked' src={imagesArray[1]} />
                <img className='Intro__Logo' src={TankLogo} alt={`Tank's Ironclad Meats Logo`} />
            </div>
        </div>
    )
}
export default IntroBlock;
import Link from './Link';
import Logo from '../images/tank_logo.jpg';
import TextPanel from './TextPanel';

const About = () => {
    return (
        <div className='About'>
            <img className='About__Logo' src={Logo} alt="Tank's Iron Clad Meats Logo"/>
            <TextPanel 
                title='Jeff "Tank" Harkleroad' 
                p1='Serving Columbus and Central Ohio, we make smoked and slow-cooked meats and comfort cuisine.' 
                p2='' 
                p3='' 
            />
            <div id='WhereYouCanFindUs'>Where you can find us:</div>
            <TextPanel 
                title={ <Link 
                            url='https://www.facebook.com/pages/category/Bar/Brewstirs-Beechwold-Tavern-112882397218391/'
                            text='Brewstirs Beechwold Tavern'
                        />} 
                p1='Every day, Noon - 11PM' 
                p2='4955 Arbor Village Drive, Columbus, Ohio 43215' 
                p3='' 
            />
        </div>
    )
}
export default About;
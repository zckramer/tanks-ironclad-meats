import { useState, useEffect } from 'react';
import TankLogo from '../images/tank_logo.png';
import IntroVideo from '../images/RoughDraft01.mp4';
import meat1 from '../images/meat01.jpg';
import meat2 from '../images/meat02.jpg';
import meat3 from '../images/meat03.jpg';

const imagesArray = [
    meat1,
    meat2,
    meat3
]
let carouselIndex = 0;

const IntroBlock = (props) => {
    const [imageFromCarousel, setImageFromCarousel] = useState(imagesArray[0])   
    
    function carouselIncrement () {
        carouselIndex >= imagesArray.length - 1 ? carouselIndex = 0 : carouselIndex = carouselIndex + 1;
        console.log("carousel image index is... ", carouselIndex);
    }

    useEffect(() => {
        setInterval(()=> {
            carouselIncrement();
            setImageFromCarousel(imagesArray[carouselIndex])
        }, 4000);
        return clearInterval();
    }, [])



    return (
        <div className='IntroBlock'>
            <div className='Intro__Logo-Background'>
            {props.dimensions.width < 1225 ? 
                <img 
                    className="Intro__Background-Carousel"
                    src={imageFromCarousel}    
                    alt='Carousel Containing photos of TICM products'
                />
            :
                <video autoPlay muted 
                    className='Intro__Background' 
                    alt='Action scenes of meats being cooked'
                    src={IntroVideo} type='video/mp4'
                />
            }
                <img 
                    className='Intro__Logo' 
                    src={TankLogo} 
                    alt={`Tank's Ironclad Meats Logo`} 
                    onClick={()=>window.open('https://youtu.be/_Qc9j3cFiLA', '_self')}
                />
            </div>
        </div>
    )
}
export default IntroBlock;
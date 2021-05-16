import { useState, useEffect } from 'react';
import TankLogo from '../images/tank_logo.png';
import IntroVideo from '../images/RoughDraft01.mp4';
import image01 from '../images/carousel/FireAndSmoke01.JPG';
import image02 from '../images/carousel/Rotisserie01.JPG';
import image03 from '../images/carousel/Ribs01.JPG';
import image04 from '../images/carousel/Chicken_Plate01.JPG';
import image05 from '../images/carousel/PulledPork_Plate01.JPG';
import image06 from '../images/carousel/RibsAndChicken_Plate01.JPG';

// TODO: Abstract the Image Carousel away from IntroBlock...
const imagesArray = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06
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
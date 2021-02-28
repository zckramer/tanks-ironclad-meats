import fbIcon from '../images/Facebook_icon.png';
import instaIcon from '../images/Instagram_icon.png';

const Contact = () => {
    return (
        <div className='Contact' >
            <div className='Contact__Panel'>
                <div className='Contact__Panel-Section'>
                    <div className="Contact__Panel-Header">
                        <span>Contact us!</span>
                    </div>
                    <div className='Contact__Entry'>
                        <span>Phone: </span>
                        <span>(614) 597-5433</span>
                    </div>
                    <div className='Contact__Entry'>
                        <span>email: </span>
                        <span><a href='mailto: tanksmeats@gmail.com'>tanksmeats@gmail.com</a></span>
                    </div>
                    <div className='Contact__Entry'>
                        <span>follow us on social media: </span>
                        <div className='Contact__Entry-Container'>
                        <img 
                            src={fbIcon} 
                            alt='Facebook social media link'
                            className='Contact__Social-Link'
                            onClick={()=>window.open('https://www.facebook.com/IroncladMeats/')}
                            />
                        <img 
                            src={instaIcon} 
                            alt='Instagram social media link'
                            className='Contact__Social-Link'
                            onClick={()=>window.open('https://www.instagram.com/ironcladmeats/')}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
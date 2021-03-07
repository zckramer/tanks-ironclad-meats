import Link from './Link';


const About = () => {
    return (
        <div className='About'>
            <div className='About__Panel'>
                <div className='About__Panel-Header'>Jeff "Tank" Harkleroad</div>
                <div className='About__Panel-Section'>
                    <div>
                        Serving Columbus and central Ohio, we make smoked and 
                        slow-cooked meats and comfort cuisine.
                    </div>
                </div>
            </div>
            
            <div className='About__Panel-Section'>
                <div className='About__Panel-Header'>
                    Where you can find us: 
                </div>
                <div>
                    <Link 
                        url='https://www.facebook.com/pages/category/Bar/Brewstirs-Beechwold-Tavern-112882397218391/'
                        text='Brewstirs Beechwold Tavern'
                    />
                </div>
                <div>Every day, Noon - 11PM</div>
                <div>4955 Arbor Village Drive, Columbus, Ohio 43215</div>
            </div>
            <div className='About__Panel'>
                <div className='About__Panel-Section'>
                    <div>
                        <Link 
                            url='https://www.facebook.com/HeyHeyBarandGrill/'
                            text='HeyHey Bar and Grill'
                        />
                    </div>
                    <div>Every Sunday, 4:30PM - 12AM</div>
                    <div>361 E Whittier St, Columbus, OH 43206</div>
                </div>
            </div>
        </div>
    )
}
export default About;
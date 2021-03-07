import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Menu = () => {
    const MenuFull = () => {
        return(
            <div className='Menu__Page' >
                <div className='Menu__Menu-Area'>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            Plates
                        </div>
                        <div className='Menu__Section-Content'>
                            <div className='Menu__Section-Description'>
                                <div className='Menu__Note'>
                                    Choose your meat, sauce, and 2 sides.
                                </div>
                                <div className='Menu__Note'>
                                    Can't choose just one? Get them all with Tank's Platter! Comes with a bunch of sauce! 
                                </div>
                                <div className='Menu__Item'>
                                    <div className='Menu__Item-Name' >
                                    ½ Roasted Chicken, 4 Ribs, 4oz Brisket, 4oz Pulled Pork, two sides. 
                                    </div>
                                    <div className='Menu__Item-Price' >
                                    37
                                    </div>
                                </div>
                            </div>
                            <hr style={{width: '50%'}}/>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Chicken
                                </div>
                                <div className='Menu__Item-Note'>
                                    ¼, ½, whole bird
                                </div>
                                <div className='Menu__Item-Price' >
                                    7, 12, 22
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Brisket
                                </div>
                                <div className='Menu__Item-Note'>
                                    ½lb, 1lb
                                </div>
                                <div className='Menu__Item-Price' >
                                    11, 20
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Pulled Pork
                                </div>
                                <div className='Menu__Item-Note'>
                                    1 pint
                                </div>

                                <div className='Menu__Item-Price' >
                                    10
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Bone Platter
                                </div>
                                <div className='Menu__Item-Note'>
                                    ¼ , ½ , full rack of ribs
                                </div>
                                <div className='Menu__Item-Price' >
                                    8, 11, 22
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            Sandwiches
                        </div>
                        <div className='Menu__Section-Content'>
                            <div className='Menu__Section-Description'>
                                <div className='Menu__Note'>
                                    5oz of your choice of meat on a Potato bun. Pick a sauce. Comes on the side, of course.
                                </div>
                                <div className='Menu__Note'>
                                    Replace the bun with a garlic and herb seasoned wrap. Just ask!
                                </div>
                                <div className='Menu__Item'>
                                    <div className='Menu__Item-Name' >
                                        Make it a meal and add 2 sides with your sandwich! 
                                    </div>
                                    <div className='Menu__Item-Price' >
                                    +2
                                    </div>
                                </div>
                            </div>
                            <hr style={{width: '50%'}}/>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    The "OH" Wrap
                                </div>
                                <div className='Menu__Note'>
                                    pulled chicken
                                </div>
                                <div className='Menu__Item-Price' >
                                    7
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Brisket
                                </div>
                                <div className='Menu__Item-Price' >
                                    9
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Pulled Pork
                                </div>
                                <div className='Menu__Item-Price' >
                                    8
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            Sides
                        </div>
                        <div className='Menu__Section-Content'>
                            <div className='Menu__Section-Description'>
                                <div className='Menu__Item'>
                                    <div className='Menu__Item-Name' >
                                        <div className='Menu__Item-Note'>
                                            Any side, 1 pint
                                        </div>
                                    </div>
                                    <div className='Menu__Item-Price' >
                                        2
                                    </div>
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Cheese Z Potatoes
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Baked Beans
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Cole Slaw
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Collard Greens
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            The Sauces
                        </div>
                        <div className='Menu__Header-Description'>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Note'>
                                    Don't run dry!
                                </div>
                                <div className='Menu__Item-Price'>
                                    1 per
                                </div>
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Carolina Gold
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                KC BBQ
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Pit Style BBQ
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Tank-gy Habanero BBQ
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Louisiana Hot Sauce
                            </div>
                        </div>
                    </div>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            Cookie!
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Ask what's in stock!
                            </div>
                            <div className='Menu__Item-Price'>
                                2
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
}

    const MenuPage1 = () => {
        return (
            <div className='Menu__Menu-Area'>
                <div className='Menu__Page' >
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            Plates
                         </div>
                        <div className='Menu__Section-Content'>
                            <div className='Menu__Section-Description'>
                                <div className='Menu__Note'>
                                    Choose your meat, sauce, and 2 sides.
                                </div>
                                <div className='Menu__Note'>
                                    Can't choose just one? Get them all with Tank's Platter! Comes with a bunch of sauce! 
                                </div>
                                <div className='Menu__Item'>
                                    <div className='Menu__Item-Name' >
                                        ½ Roasted Chicken, 4 Ribs, 4oz Brisket, 4oz Pulled Pork, two sides. 
                                    </div>
                                    <div className='Menu__Item-Price' >
                                        37
                                    </div>
                                </div>
                            </div>
                            {/* <hr style={{width: '50%'}}/> */}
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                Chicken
                                </div>
                                <div className='Menu__Item-Note'>
                                    ¼, ½, whole bird
                                </div>
                                <div className='Menu__Item-Price' >
                                    7, 12, 22
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Brisket
                                </div>
                                <div className='Menu__Item-Note'>
                                    ½lb, 1lb
                                </div>
                                <div className='Menu__Item-Price' >
                                    11, 20
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Pulled Pork
                                </div>
                                <div className='Menu__Item-Note'>
                                    1 pint
                                </div>

                                <div className='Menu__Item-Price' >
                                    10
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Bone Platter
                                </div>
                                <div className='Menu__Item-Note'>
                                    ¼ , ½ , full rack of ribs
                                </div>
                                <div className='Menu__Item-Price' >
                                    8, 11, 22
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const MenuPage2 = () => {
        return (
            <div className='Menu__Menu-Area'>
                <div className='Menu__Page' >
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            Sandwiches
                        </div>
                        <div className='Menu__Section-Content'>
                            <div className='Menu__Section-Description'>
                                <div className='Menu__Note'>
                                    5oz of your choice of meat on a Potato bun. Pick a sauce. Comes on the side, of course.
                                </div>
                                <div className='Menu__Note'>
                                    Replace the bun with a garlic and herb seasoned wrap. Just ask!
                                </div>
                                <div className='Menu__Item'>
                                    <div className='Menu__Item-Name' >
                                        Make it a meal and add 2 sides with your sandwich! 
                                    </div>
                                    <div className='Menu__Item-Price' >
                                    +2
                                    </div>
                                </div>
                            </div>
                            {/* <hr style={{width: '50%'}}/> */}
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    The "OH" Wrap
                                </div>
                                <div className='Menu__Note'>
                                    pulled chicken
                                </div>
                                <div className='Menu__Item-Price' >
                                    7
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Brisket
                                </div>
                                <div className='Menu__Item-Price' >
                                    9
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Pulled Pork
                                </div>
                                <div className='Menu__Item-Price' >
                                    8
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const MenuPage3 = () => {
        return (
            <div className='Menu__Menu-Area'>
                <div className='Menu__Page'>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            Sides
                        </div>
                        <div className='Menu__Section-Content'>
                            <div className='Menu__Section-Description'>
                                <div className='Menu__Item'>
                                    <div className='Menu__Item-Name' >
                                        <div className='Menu__Item-Note'>
                                            Any side, 1 pint
                                        </div>
                                    </div>
                                    <div className='Menu__Item-Price' >
                                        2
                                    </div>
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Cheesy Potatoes
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Baked Beans
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Cole Slaw
                                </div>
                            </div>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Name' >
                                    Collard Greens
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            The Sauces
                        </div>
                        <div className='Menu__Header-Description'>
                            <div className='Menu__Item'>
                                <div className='Menu__Item-Note'>
                                    Don't run dry!
                                </div>
                                <div className='Menu__Item-Price'>
                                    1 per
                                </div>
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Carolina Gold
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                KC BBQ
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Pit Style BBQ
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Tangy Habanero BBQ
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                Louisiana Hot Sauce
                            </div>
                        </div>
                    </div>
                    <div className='Menu__Subsection'>
                        <div className='Menu__Subsection-Header'>
                            We've got cookies! Ask what we've got in stock!
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name'>
                                1 Cookie
                            </div>
                            <div className='Menu__Item-Price'>
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )    
    }

    const pages = [MenuPage1, MenuPage2, MenuPage3];
    const [pageToShow, SetPageToShow] = useState(pages[0]);
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

    return (
        <div className='Menu'>
            {isDesktopOrLaptop ? <MenuFull /> :
                <div className='Menu__Header'>
                    <div className='Menu__Header-Item' onClick={()=>SetPageToShow(pages[0])}>Page 1</div>
                    <div className='Menu__Header-Item' onClick={()=>SetPageToShow(pages[1])}>Page 2</div>
                    <div className='Menu__Header-Item' onClick={()=>SetPageToShow(pages[2])}>Page 3</div>
                </div>
        }
            {isDesktopOrLaptop ? null : pageToShow }
        </div>
    )
}
export default Menu;
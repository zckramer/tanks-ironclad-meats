import { useState } from 'react';

// import comingSoon from '../images/comingSoon.png'
import menu1 from '../images/TP_1.jpg';
import menu2 from '../images/TP_2.jpg';
import menu3 from '../images/TP_3.jpg';


const MenuSections = () => {
    const [sections] = useState([
        menu1,
        menu2,
        menu3
    ])

    const [sectionToShow, setSectionToShow] = useState(sections[0]);

    function handleChangePage (section) {
        setSectionToShow(sections[section])
    }

    return (
        <div className='Menu'>
            <img className='Menu__theMenu' src={sectionToShow} />
            <div className='Menu__ButtonsContainer'>
                <div className='Menu__Buttons' onClick={()=>handleChangePage(0)} >1</div>
                <div className='Menu__Buttons' onClick={()=>handleChangePage(1)} >2</div>
                <div className='Menu__Buttons' onClick={()=>handleChangePage(2)} >3</div>
            </div>
        </div>
    )
}
export default MenuSections;
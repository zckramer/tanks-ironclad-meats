import { useState } from 'react';

const MenuSections = () => {
    const [sections, setSections] = useState([
        'http://placekitten.com/800/800',
        'http://placekitten.com/1000/1000',
        'http://placekitten.com/600/600'
    ])

    const [sectionToShow, setSectionToShow] = useState(sections[0]);

    function handleChangePage (section) {
        console.log("page to show: ", sections[section])
        setSectionToShow(sections[section])
    }

    return (
        <div className='MenuSections'>
            <img src={sectionToShow} style={{height: "600px", width: "600px", borderRadius:"16px"}}/>
                <div className="Menu-Buttons-Container">
                <div className="Page-Button" onClick={()=>handleChangePage(0)}>A</div>
                <div className="Page-Button" onClick={()=>handleChangePage(1)}>B</div>
                <div className="Page-Button" onClick={()=>handleChangePage(2)}>C</div>
            </div>
        </div>
    )
}
export default MenuSections;
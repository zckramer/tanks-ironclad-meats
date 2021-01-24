import { useState } from 'react';

const MenuSections = (props) => {
    const [sections, setSections] = useState([
        'http://placekitten.com/1200/1200',
        'http://placekitten.com/1000/1000',
        'http://placekitten.com/600/600'
    ])

    const [sectionToShow, setSectionToShow] = useState(sections[0]);

    function handleChangePage (section) {
        setSectionToShow(sections[section])
    }

    return (
        <div className={props.className}>
            <img src={sectionToShow} style={{height: "330px", width: "330px", borderRadius:"16px"}}/>
            <div className={props.buttonContainerClass}>
                <div className="Page-Button" onClick={()=>handleChangePage(0)}>A</div>
                <div className="Page-Button" onClick={()=>handleChangePage(1)}>B</div>
                <div className="Page-Button" onClick={()=>handleChangePage(2)}>C</div>
            </div>
        </div>
    )
}
export default MenuSections;
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
            <img src={sectionToShow} style={{height: "80%", width: "80%", borderRadius:"16px"}}/>
            <div className={props.buttonContainerClass}>
                <div className={props.buttonClass} onClick={()=>handleChangePage(0)} style={{width: '20%'}}>A</div>
                <div className={props.buttonClass} onClick={()=>handleChangePage(1)} style={{width: '20%'}}>B</div>
                <div className={props.buttonClass} onClick={()=>handleChangePage(2)} style={{width: '20%'}}>C</div>
            </div>
        </div>
    )
}
export default MenuSections;
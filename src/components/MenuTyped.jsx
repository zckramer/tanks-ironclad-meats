const Menu = () => {
    const MenuPage1 = () => {
        return(
            <div className='Menu__Page' >
                <div className='Menu__Subsection'>
                    <div className='Menu__Subsection-Header'>
                        Subsection Header 1
                    </div>
                    <div className='Menu__Section-Content'>
                        <div className='Menu__Section-Description'>
                            A description of this subsection. Comes with a side of your choice.
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Menu__Subsection'>
                    <div className='Menu__Subsection-Header'>
                        Subsection Header 2
                    </div>
                    <div className='Menu__Section-Content'>
                        <div className='Menu__Section-Description'>
                            A description of this subsection. Add a side for $1 or whatever.
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                        <div className='Menu__Item'>
                            <div className='Menu__Item-Name' >
                                Item Name
                            </div>
                            <div className='Menu__Item-Price' >
                                $$$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

    const MenuPage2 = () => {
    
    }

    const MenuPage3 = () => {
    
    }



    return (
        <div className='Menu'>
            <div className='Menu__Header'>
                <div className='Menu__Header-Item'>Page 1</div>
                <div className='Menu__Header-Item'>Page 2</div>
                <div className='Menu__Header-Item'>Page 3</div>
            </div>
            <div className='Menu__Menu-Area'>
                {<MenuPage1 />}
            </div>
        </div>
    )
}
export default Menu;
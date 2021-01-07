import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const Menu = (props) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    
    return (
        <div className='Menu'>
            <Document
                file={props.menu}
                loading={"Loading Page..."}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                    id="MenuPDF"
                    pageNumber={1} 
                />
            </Document>
            <Document
                id="MenuPDF"
                file={props.menu}
                loading={"Loading Page..."}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                    id="MenuPDF"
                    pageNumber={2} 
                />
            </Document>
        </div>
        

            /* <div className="Menu__Section">
            <div className="Menu__Section-Header" id="Sampler-Text">Tank's Sampler</div>
                <div className="Menu__Item">
                    <div className="Menu__Item-Name">1/2 Chicken, 4 Ribs, Brisket, Pulled Pork, 2 sides</div>
                    <div className="Menu__Item-Price">$38</div>
                </div>
            </div>
            <div className="Menu__Section">
            <div className="Menu__Section-Header">Plates</div>
                <div className="Menu__Item">
                    <div className="Menu__Item-Name">1/2 Bird & 2 sides</div>
                    <div className="Menu__Item-Price">$12</div>
                </div>
            </div> */

        // </div>
    )
}
export default Menu;
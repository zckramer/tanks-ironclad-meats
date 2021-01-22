import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const MenuMobile = (props) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    function handleChangePage (dir) {
        if (dir === "NEXT") {
            if (numPages > pageNumber) {
                setPageNumber(pageNumber + 1);
            }
        }
        if (dir === "PREV") {
            if (pageNumber > 1) {
                setPageNumber(pageNumber - 1);
            }
        }
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
                    pageNumber={pageNumber} 
                />
            </Document>
            <div className="Menu-Buttons-Container">
                <div className="Page-Button" onClick={()=>handleChangePage("NEXT")}>NEXT</div>
                <div className="Page-Button" onClick={()=>handleChangePage("PREV")}>PREV</div>
            </div>
        </div>
    )
}
export default MenuMobile;
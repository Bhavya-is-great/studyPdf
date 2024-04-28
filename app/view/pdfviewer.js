import React from 'react';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';



const Pdfviewer = ({ url }) => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    const setFile = () => {
        if (url == '') {
            return true;
        } else {
            return false;
        }
    }


    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess(params) {
        setNumPages(params.numPages);
    }


    return (
        <div>
            {
                setFile() ? (
                    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center items-center">
                        No pdf
                    </div>
                ) : (
                    <div>
                        <Document file={'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'} onError={(error) => console.error(error)} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default Pdfviewer

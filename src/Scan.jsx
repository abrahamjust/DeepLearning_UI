import "./Scan.css"
export { Scan };

function Scan() {
    return (
        <div className="ScanContainer">
            <Header />
            <Upload />
            <TakePhoto />
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <footer className="ScanFooter">
            <div>Tips for best results:</div>
            <ul>
                <li className="ScanFooterListElement">Ensure good lighting</li>
                <li className="ScanFooterListElement">Keep text clearly visible</li>
                <li className="ScanFooterListElement">Avoid shadows and glare</li>
            </ul>
        </footer>
    )
}

function Header() {
    return (
        <header className="ScanHeader">
            <div className="ScanHeaderDiv">
                <button className="BackButton">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 12H7M12 5L5 12L12 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div>Scan Document</div>
            </div>
        </header>
    )
}

function Upload() {
    return (
        <div className="ScanUploadOuterContainer">
            <div className="ScanUploadInnerContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="ScanUploadSVG">
                    <g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        
                        {/* Arrow */}
                        <path d="M12 16V6"/>
                        <path d="M8 10L12 6L16 10"/>

                        {/* Tray */}
                        <path d="M5 16V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V16"/>

                    </g>
                </svg>
                <p className="ScanUploadUpload">Upload a document</p>
                <p>PNG, JPG, or PDF up to 10MB</p>
                <input
                    type="file"
                    accept="image/png, image/jpeg, application/pdf"
                    id="uploadInput"
                    className="ScanUploadInput"
                />

                <label htmlFor="uploadInput" className="ScanUploadButton">
                    Choose File
                </label>
            </div>
        </div>
    )
}

function TakePhoto() {
    return (
        <div className="ScanPhotoOuterContainer">
            <input type="file" accept="image/*" capture="environment" id="takePhotoInput"/>
            <div className="ScanPhotoInnerContainer">
                <label htmlFor="takePhotoInput" className="ScanPhotoInnerContainerLabel">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <g fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                            {/* Camera body */}
                            <rect x="3" y="7" width="18" height="12" rx="2"/>

                            {/* Lens */}
                            <circle cx="12" cy="13" r="3.5"/>

                            {/* Top bump */}
                            <path d="M9 7l1.5-2h3L15 7"/>

                        </g>
                    </svg>
                    Take Photo
                </label>
            </div>
        </div>
    )
}
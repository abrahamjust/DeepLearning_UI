export { Home };
import './Home.css'

function Home() {
    return (
        <div className="HomeContainer">
            <Picture />
            <Title />
            <List />
            <HomeBottom />
        </div>
    )
}

function HomeBottom() {
    return (
        <>
            <button className="HomeButton">Get Started</button>
            <div className='HomeBottomDiv'>Secure, fast, and easy to use</div>
        </>
    )
}

function Title() {
    return (
        <>
            <h1 className="HomeTitleHeading">DocuScan AI</h1>
            <h2 className="HomeTitleSubHeading">Scan documents with intelligent text recognition</h2>
        </>
    )
}

function List() {
    return (
        <>
            <div className="HomeListDiv">
                <ul>
                    <li>Advanced OCR technology</li>
                    <li>AI-powered text analysis</li>
                    <li>Fast and accurate results</li>
                </ul>
            </div>
        </>
    )
}

function Picture() {
    return (
        <>
            <svg width="200" height="200" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="HomeSVG">
  
                {/* Circle */}
                <circle cx="128" cy="128" r="85" fill="#ffffff"/>

                {/* Scan brackets + center line */} 
                <g stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" fill="none">
                    
                    {/* top left */}
                    <path d="M78 98 L78 88 L98 88"/>
                    
                    {/* top right */}
                    <path d="M178 98 L178 88 L158 88"/>
                    
                    {/* bottom left */}
                    <path d="M78 158 L78 168 L98 168"/>
                    
                    {/* bottom right */}
                    <path d="M178 158 L178 168 L158 168"/>

                    {/* center line */}
                    <line x1="108" y1="128" x2="148" y2="128"/>
            
                </g>
            </svg>
        </>
    )
}


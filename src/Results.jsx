import './Results.css'
export { Result }

function Result() {
    return (
        <div className='ResultContainer'>
            <Header />
            <ResultsText />
            <ResultsImage />
            <ReturnHomeButton />
        </div>
    )
}

function Header() {
    return (
        <header className="ResultsHeader">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                <g fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    
                    {/* Circle */}
                    <circle cx="12" cy="12" r="9"/>
                    
                    {/* Check mark */}
                    <path d="M8 12l3 3 5-6"/>

                </g>
            </svg>
            <div className='ResultsHeaderDiv'>Results</div>
        </header>
    )
}

function ResultsText({ text }) {
    return (
        <div className='ResultsTextDiv'>
            <div className='ResultsTextTitle'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        
                        {/* File outline */}
                        <path d="M6 3H14L20 9V21H6Z"/>

                        {/* Folded corner */}
                        <path d="M14 3V9H20"/>

                        {/* Text lines */}
                        <line x1="8" y1="13" x2="16" y2="13"/>
                        <line x1="8" y1="17" x2="13" y2="17"/>

                    </g>
                </svg>
                Extracted text
            </div>
            <div className='ResultTextAreaDiv'>
                <textarea
                    className="ResultTextArea"
                    value={text}
                    readOnly
                />
            </div>
        </div>
    )
}

function ResultsImage({ imageUrl }) {
    return(
        <div className='ResultsImg'>
            <div>Processed Image</div>
            <img src={imageUrl} className="ResultImage" />
        </div>
    )
}

function ReturnHomeButton() {
    return(
        <button className='ResultReturnHome'>Return Home</button>
    )
}
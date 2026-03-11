import './Loading.css'
export { Loading }

function Loading() {
    return(
        <div className='LoadingContainer'>
            <LoadingDiv />
        </div>
    )
}

function Spinner() {
    return (
            <div class="loader">
                <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" stroke="#e5e7eb" strokeWidth="5"/>
                <circle class="spin" cx="25" cy="25" r="20" fill="none" stroke="#4f46e5" strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="80"
                        strokeDashoffset="60"/>
                </svg>
            </div>
    )
}

function LoadingDiv() {
    return(
        <div className='LoadingDiv'>
            <div className='LoadingDivTop'>
                <Spinner />
                <p>Processing</p>
            </div>
            
            <div className='LoadingDivInfo'>
                <ul>
                    <li className='LoadingDivList'>Analyzing Document</li>
                    <li className='LoadingDivList'>Running Model</li>
                    <li className='LoadingDivList'>Displaying Output</li>
                </ul>
            </div>
        </div>
    )
}
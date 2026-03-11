import { useState } from 'react';
import  { Home }  from './Home.jsx';
import { Scan } from './Scan.jsx';
import { Loading } from './Loading.jsx';
import { Result } from './Results.jsx';

function App() {

  	const [page, setPage] = useState('home');

	if(page == 'home') {
		return <Home goToScan={() => setPage("scan")} />
  	}

	if (page === "scan") {
		return <Scan goToHome={() => setPage("home")} goToLoading={() => setPage("loading")} />
	}

	if (page === "loading") {
		return <Loading goToResult={() => setPage("result")} />
	}

	if (page === "result") {
		return <Result goToHome={() => setPage("home")}/>
	}
}

export default App

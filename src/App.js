import MainPage from "./pages/MainPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";

function App() {
	
  return (
	  <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/ad" element={<AdminPage/>}/>
				<Route path="/login" element={<LoginPage/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;

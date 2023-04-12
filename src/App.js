import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Nav/Navigation';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from './components/Footer/Footer';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Navigation/>
                    <Routes>
                        <Route path='/Profile' element={<Profile/>}/>
                        <Route path='/Dialogs' element={<Dialogs/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

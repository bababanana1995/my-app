import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Nav/Navigation';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Navigation/>
                    <Routes>
                        <Route path='/Profile/*'  element={<Profile/>}/>
                        <Route path='/Dialogs/*'  element={<Dialogs/>}/>
                        <Route path='/News/*'     element={<News/>}/>
                        <Route path='/Music/*'    element={<Music/>}/>
                        <Route path='/Settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

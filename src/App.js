import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navigation from './components/Nav/navigation';
import Profile from './components/Profile/myPost/profile';
import Footer from './components/Footer/footers';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="fl">
      <Navigation />
      <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;

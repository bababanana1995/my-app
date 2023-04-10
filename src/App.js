import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Navigation from './components/Nav/navigation';
import Profile from './components/Profile/profile';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="fl">
      <Navigation />
      <Profile />
      </div>
    </div>
  );
}

export default App;

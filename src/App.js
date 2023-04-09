import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Profile from './components/profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;

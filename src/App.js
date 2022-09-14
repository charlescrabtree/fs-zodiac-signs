import './App.css';
import { zodiac } from './data.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header name='Charles Crabtree' />
      <Main zodiacs={ zodiac } />
      <Footer year='2022' />
    </div>
  );
}

export default App;

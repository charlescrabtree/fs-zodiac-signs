import './App.css';
import { zodiac } from './data';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

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

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

export default App;

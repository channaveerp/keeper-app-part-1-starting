import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Note from './component/Note';

function App(props) {
  return (
    <div className='App'>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;

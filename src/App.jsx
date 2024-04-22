import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='flex-body'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

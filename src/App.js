import './App.css';
import Login from './Pages/Login/Login';
import Footer from './Sheard/Footer/Footer';
import Header from './Sheard/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Login></Login>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

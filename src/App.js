import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Carousal from './Components/carousal/carousal';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousal></Carousal>
      <Content></Content>
      <Footer></Footer>

    </div>
  );
}

export default App;

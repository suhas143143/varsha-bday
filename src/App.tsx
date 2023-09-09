
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About.component';
import Home from './pages/Home/Home.component'
import Header from './pages/Header/Header.component';



const App = () => {





  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>



            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
